const logger = require("../shared-utils/logging");
const { runStrapiQuery } = require("../utils/auth.utils");
/**
 * START OF STATIC URL MAPPINGS
 */

// All Single Types in Strapi - pages in website
const STATIC_SINGLE_TYPES = {
  aboutus_pages_cmps: "/about",
  b_triples_cmps: "/b-triple",
  contacts_cmps: "/contactus",
  home_pages_cmps: "/",
  industries_cmps: "/industries",
  news_pages_cmps: "/news",
  sustainabilities_cmps: "/sustainability",
  transports_cmps: "/transport",
  warehousings_cmps: "/warehousing",
  components_about_us_core_values_cmps: "/about",
  components_about_us_integrated_models_cmps: "/about",
  components_about_us_meet_teams_cmps: "/about",
  components_about_us_missions_cmps: "/about",
  components_about_us_why_logistics_cmps: "/about",
  components_elements_customer_hubs_cmps: "/",
  components_elements_customer_hub_cards_cmps: "/",
  components_elements_expansions_cmps: "/warehousing",
  components_elements_footer_menus_cmps: "/",
  components_elements_grid_cards_cmps: "/",
  components_elements_integrated_solutions_cmps: "/",
  components_elements_items_cmps: "/warehousing",
  components_elements_legals_cmps: "/",
  components_layout_textand_medias: "/industries"
};

// Static URL mappings based on component type
const STATIC_URL_MAPPINGS = {
  // Navigation/Footer components
  footer: "/",
  navbar: "/",
  nav_bar: "/",
  nav_items: "/",
  integrated_solutions: "/",
  legal: "/",
  linkitems: "/",
  links: "/",
  quick_links: "/",
  social: "/",
  customer_hubs: "/",

  // About page components
  about_us: "/about",
  aboutus: "/about",
  core_value_items: "/about",
  expansions: "/about",
  location: "/about",
  meet_teams: "/about",
  our_services: "/about",
  services: "/about",

  // Other static pages
  btriple: "/b-triple",
  home_page: "/",
  industries: "/industries",
  industry: "/industries",
  transport: "/transport",
  warehouse: "/warehousing",
  sustainability: "/sustainability",
  sustainabilities_cmps: "/sustainability",
  sustainabilities: "/sustainability",
  safetyandcompliances: "/sustainability",
  layout_compliance_sections: "/sustainability",
  news: "/news",
  posts: "/news",
  recent_news: "/news",
  "elements.customer-hub": "/",
  "elements.transport-services": "/transport",
  components_elements_transport_solutions: "/transport",
  "elements.warehousing-services": "/warehousing",
  "elements.b-triple-info": "/b-triple",
  components_about_us_cor_commimtments_items: "/about",
  components_about_us_message_directors: "/about",
};
/**
 * END OF STATIC URL MAPPINGS
 */

/**
 * START OF UTILITY FUNCTIONS
 */

// async function findParentPageByComponentId(collectionName, hitId) {
//   // Strapi uses dots in component_type (e.g., layout.hero-section)
//   // but underscores in table names (components_layout_hero_sections)
//   const strapiComponentType = collectionName
//     .replace("components_", "")
//     .replace("_", ".")
//     .replace(/s$/, ""); // Basic plural to singular attempt

//   // Iterate through all potential parent pages (Single Types)
//   for (const [cmpsTable, url] of Object.entries(STATIC_SINGLE_TYPES)) {
//     try {
//       // Check if this hit.id is registered as a cmp_id in this page's link table
//       const sql = `
//         SELECT entity_id
//         FROM ${cmpsTable}
//         WHERE cmp_id = ?
//         AND (component_type = ? OR component_type = ?)
//         LIMIT 1
//       `;

//       // We check both the collection name and the dot-notation name
//       const results = await runStrapiQuery(sql, [
//         hitId,
//         collectionName,
//         strapiComponentType,
//       ]);
//       if (results.length > 0) {
//         return url; // Found the parent page!
//       }
//     } catch (err) {
//       // Table might not exist or column naming differs, skip and continue
//       continue;
//     }
//   }
//   return null;
// }

async function findParentPageByComponentId(collectionName, hit) {
  const hitId = hit.document.id;
  let targetUrl = "/";
  
  // --- 1. SPECIAL CASE: Hero Sections ---
  if (collectionName === "components_layout_hero_sections") {
    try {
      const heroResult = await runStrapiQuery(
        `SELECT link, title FROM components_layout_hero_sections WHERE id = ${hitId} LIMIT 1`,
      );

      if (heroResult.length > 0) {
        const { link, title } = heroResult[0];
        // If link exists, use it. Otherwise, map the title to a URL.
        if (link && link.trim() !== "") targetUrl = link;

        const titleMap = {
          "Let’s Connect & Collaborate": "/contactus",
          "Our Story": "/about",
          Services: "/services",
          News: "/news",
          "Global Transport & Logistics Solutions": "",
          "Sustainability & Compliance": "/sustainability",
          "B-Triple": "/b-triple",
          "Global Transport & Logistics Solutions": "/",
          "Warehousing Facilities": "/warehousing",
          "Industries We Serve": "/industries",
          "Gold Tiger Logistics Solutions": "/about",
        };
        targetUrl = titleMap[title] || "/";
      }
    } catch (e) {
      console.error("Hero table error", e);
    }
  }

  // --- 2. SPECIAL CASE: News Posts ---
  if (collectionName == "news_items") {
    // For news items, we want to return /news/[slug]
    try {
      const slug = hit.document.document_id;
      targetUrl = `/all-news/${slug}`;
    } catch (e) {
      console.error("News items table error", e);
    }
  }

  // --- 3. FLOW B: Search STATIC_SINGLE_TYPES first ---
  if (!targetUrl || targetUrl === "/") {
    const entries = Object.entries(STATIC_SINGLE_TYPES);

    // Check if the collectionName is in the entries object, and if so, return the corresponding value
    for (const [key, value] of entries) {
      if (collectionName === key) {
        targetUrl = value;
        break;
      }
    }

    // --- 4. FLOW C: Keyword Fallback ---
    const title = (hit.title || "").toLowerCase();

    if (title.includes("transport")) targetUrl = "/transport";
    else if (title.includes("warehousing") || title.includes("warehouse"))
      targetUrl = "/warehousing";
    else if (title.includes("b-triple")) targetUrl = "/b-triple";
    else if (
      title.includes("about_us") ||
      title.includes("about") ||
      title.includes("about.us")
    )
      targetUrl = "/about";

    if (targetUrl) mappingType = "keyword_fallback";
  }

  return targetUrl;
}
/**
 * END OF UTILITY FUNCTIONS
 */

/**
 * Main function to enrich collections with URLs
 */
async function enrich_collection_with_urls(collectionName, hits) {
  // Skip if no hits
  if (hits.length === 0) return hits;
  const enrichedHits = await Promise.all(
    hits.map(async (hit) => {
      let targetUrl = null;
      let mappingType = "default";

      // 1. Check STATIC_URL_MAPPINGS first (Direct overrides)
      targetUrl =
        STATIC_URL_MAPPINGS[collectionName] || STATIC_URL_MAPPINGS[hit.type];
      if (targetUrl) mappingType = "static_mapping";

      // 2. If no static mapping, check if it's a Single Type component with a known URL
      // 2. Deep Reverse Lookup: Find parent via _cmps tables
      if (!targetUrl || targetUrl === undefined) {
        logger.info(
          "🔴 No static mapping found for",
          collectionName,
          "checking for parent page..., hit:",
          hit,
        );
        const parentUrl = await findParentPageByComponentId(
          collectionName,
          hit,
        );

        if (parentUrl) {
          targetUrl = parentUrl;
          mappingType = "parent_single_type";
        }
      }

      // 3. Keyword Emergency Fallback
      if (!targetUrl || targetUrl === "/") {
        const title = (hit.title || "").toLowerCase();

        if (title.includes("transport")) targetUrl = "/transport";
        else if (title.includes("warehousing") || title.includes("warehouse"))
          targetUrl = "/warehousing";
        else if (title.includes("b-triple")) targetUrl = "/b-triple";
        else if (title.includes("about_us") || title.includes("about"))
          targetUrl = "/about";

        if (targetUrl) mappingType = "keyword_fallback";
      }

      const finalUrl = targetUrl;

      return {
        ...hit,
        url: finalUrl,
        all_pages: [finalUrl],
        page_count: targetUrl ? 1 : 0,
        mapping_type: mappingType,
      };
    }),
  );

  // Return enriched hits
  return enrichedHits;
}

module.exports = {
  enrich_collection_with_urls,
};
