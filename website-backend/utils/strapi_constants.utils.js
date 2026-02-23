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
  components_layout_textand_medias: "/industries",
  components_elements_news_letters: "/news",
  components_layout_transport_services: "/transport",
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

// async function findParentsBatch(collectionName, hitId) {
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

const HERO_TITLE_MAP = {
  "Let's Connect & Collaborate": "/contactus",
  "Our Story": "/about",
  "Services": "/services",
  "News": "/news",
  "Sustainability & Compliance": "/sustainability",
  "B-Triple": "/b-triple",
  "Warehousing Facilities": "/warehousing",
  "Industries We Serve": "/industries",
  "Gold Tiger Logistics Solutions": "/about",
  "Global Transport & Logistics Solutions": "/",
};

// Pre-compile regex for better performance
const KEYWORD_PATTERNS = [
  { regex: /transport/i, url: "/transport" },
  { regex: /warehous(?:ing|e)/i, url: "/warehousing" },
  { regex: /b-triple/i, url: "/b-triple" },
  { regex: /about[_.]?us|about/i, url: "/about" },
];

function getKeywordFallbackUrl(title) {
  if (!title) return null;
  for (const { regex, url } of KEYWORD_PATTERNS) {
    if (regex.test(title)) return url;
  }
  return null;
}

async function findParentsBatch(collectionName, hits) {
  const urlMap = new Map();

  // --- 1. Handle News Items (No DB) ---
  if (collectionName === "news_items") {
    for (const hit of hits) {
      const slug = hit.document.document_id || hit.id;
      urlMap.set(hit.id, `/all-news/${slug}`);
    }
    return urlMap;
  }

  // --- 2. Handle Hero Sections (No DB) ---
  if (collectionName === "components_layout_hero_sections") {
    for (const hit of hits) {
      const title = hit.document?.title;
      const url = HERO_TITLE_MAP[title] || "/";
      urlMap.set(hit.document.id.toString(), url);
    }
    return urlMap;
  }

  // --- 3. Handle Static Single Types & Keyword Fallback (No DB) ---
  const staticUrl = STATIC_SINGLE_TYPES[collectionName];
  
  for (const hit of hits) {
    let url = staticUrl || getKeywordFallbackUrl(hit.title) || "/";
    urlMap.set(hit.id, url);
  }

  return urlMap;
}

/**
 * Main function to enrich collections with URLs
 */
async function enrich_collection_with_urls(collectionName, hits) {
  const len = hits.length;
  if (len === 0) return hits;

  // Cache max_score calculation
  let totalScore = 0;
  for (let i = 0; i < len; i++) totalScore += hits[i].score;

  // Step 1: Filter and Batch in one pass? (Not needed unless hits > 1000)
  const needsLookup = hits.filter(h => !(STATIC_URL_MAPPINGS[collectionName] || STATIC_URL_MAPPINGS[h.type]));

  let urlMap = new Map();
  if (needsLookup.length > 0) {
    urlMap = await findParentsBatch(collectionName, needsLookup);
  }

  // Step 2: Pre-compile fallback logic
  const aboutRegex = /about[_.]?us|about/;

  // Step 3: Final Map (Pre-allocating array size can be faster for large sets)
  return hits.map((hit) => {
    // 1. Check static mappings first
    let targetUrl = STATIC_URL_MAPPINGS[collectionName] || STATIC_URL_MAPPINGS[hit.type];
    let mappingType = targetUrl ? "static_mapping" : "default";

    // 2. Lookup from our batch results
    if (!targetUrl) {
      const parentUrl = urlMap.get(hit.document.id.toString());
      if (parentUrl && parentUrl !== "/") {
        targetUrl = parentUrl;
        mappingType = "parent_single_type";
      }
    }

    // 3. Keyword Fallback (Only if we still don't have a valid URL)
    if (!targetUrl || targetUrl === "/") {
      const title = (hit.title || "").toLowerCase();
      if (title.includes("transport")) targetUrl = "/transport";
      else if (title.includes("warehous")) targetUrl = "/warehousing";
      else if (title.includes("b-triple")) targetUrl = "/b-triple";
      else if (aboutRegex.test(title)) targetUrl = "/about";

      if (targetUrl && targetUrl !== "/") mappingType = "keyword_fallback";
    }

    const finalUrl = targetUrl || "/";
    
    // Result object construction
    return {
      ...hit,
      url: finalUrl,
      all_pages: [finalUrl],
      page_count: finalUrl === "/" ? 0 : 1,
      mapping_type: mappingType,
      relative_score: totalScore > 0 ? (hit.score / totalScore) * 100 : 0,
    };
  });
}


module.exports = {
  enrich_collection_with_urls,
};
