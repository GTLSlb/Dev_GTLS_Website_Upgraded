const logger = require("../shared-utils/logging");
const {
  runQuery
} = require("../utils/auth.utils");
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
  sustainabilities_cmps: "/environment&compliance",
  transports_cmps: "/transport",
  warehousings_cmps: "/warehousing",
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
  sustainability: "/environment&compliance",
  sustainabilities: "/environment&compliance",
  safetyandcompliances: "/environment&compliance",
  layout_compliance_sections: "/environment&compliance",
  news: "/news",
  posts: "/news",
  recent_news: "/news",
  "elements.customer-hub": "/",
  "elements.transport-services": "/transport",
  "elements.warehousing-services": "/warehousing",
  "elements.b-triple-info": "/b-triple",
};
/**
 * END OF STATIC URL MAPPINGS
 */

/**
 * START OF UTILITY FUNCTIONS
 */

async function findParentPageByComponentId(collectionName, hitId) {
  // Strapi uses dots in component_type (e.g., layout.hero-section)
  // but underscores in table names (components_layout_hero_sections)
  const strapiComponentType = collectionName
    .replace("components_", "")
    .replace("_", ".")
    .replace(/s$/, ""); // Basic plural to singular attempt

  // Iterate through all potential parent pages (Single Types)
  for (const [cmpsTable, url] of Object.entries(STATIC_SINGLE_TYPES)) {
    try {
      // Check if this hit.id is registered as a cmp_id in this page's link table
      const sql = `
        SELECT entity_id 
        FROM ${cmpsTable} 
        WHERE cmp_id = ? 
        AND (component_type = ? OR component_type = ?)
        LIMIT 1
      `;

      // We check both the collection name and the dot-notation name
      const results = await runQuery(sql, [
        hitId,
        collectionName,
        strapiComponentType,
      ]);

      if (results.length > 0) {
        return url; // Found the parent page!
      }
    } catch (err) {
      // Table might not exist or column naming differs, skip and continue
      continue;
    }
  }
  return null;
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

  const enrichedHits = await Promise.all(hits.map(async (hit) => {
    let targetUrl = null;
    let mappingType = 'default';

    // 1. Check STATIC_URL_MAPPINGS first (Direct overrides)
    targetUrl = STATIC_URL_MAPPINGS[collectionName] || STATIC_URL_MAPPINGS[hit.type];
    if (targetUrl) mappingType = 'static_mapping';

    // 2. Deep Reverse Lookup: Find parent via _cmps tables
    if (!targetUrl) {
      const parentUrl = await findParentPageByComponentId(collectionName, hit.id);
      if (parentUrl) {
        targetUrl = parentUrl;
        mappingType = 'parent_single_type';
      }
    }

    // 3. Keyword Emergency Fallback
    if (!targetUrl || targetUrl === "/") {
      const title = (hit.title || "").toLowerCase();
      if (title.includes("transport")) targetUrl = "/transport";
      else if (title.includes("warehousing")) targetUrl = "/warehousing";
      else if (title.includes("b-triple")) targetUrl = "/b-triple";
      
      if (targetUrl) mappingType = 'keyword_fallback';
    }

    const finalUrl = targetUrl || "/";

    return {
      ...hit,
      url: finalUrl,
      all_pages: [finalUrl],
      page_count: targetUrl ? 1 : 0,
      mapping_type: mappingType
    };
  }));

  // Return enriched hits
  return enrichedHits;
}

module.exports = {
  enrich_collection_with_urls,
};
