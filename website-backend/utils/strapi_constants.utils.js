const logger = require("../shared-utils/logging");
const connection = require("../database/strapi.connection");
const { link } = require("../routes/typesense.route");

const COLLECTION_URL_CONFIG = {
  // Component collections that need page lookups
  components_elements_why_gtls: {
    linkTable: "components_elements_why_gtls_cmps",
    linkField: "entity_id",
  },
  components_elements_why_gtls_items: {
    linkTable: "components_elements_why_gtls_cmps",
    linkField: "entity_id",
  },
  components_elements_uneven_grids: {
    linkTable: "components_elements_uneven_grids_cmps",
    linkField: "entity_id",
  },
  components_elements_uneven_grid_items: {
    linkTable: "components_elements_uneven_grids_cmps",
    linkField: "entity_id",
  },
  components_elements_customer_hub_cards: {
    linkTable: "components_elements_customer_hub_card_cmps",
    linkField: "customer_hub_card_id",
  },
  components_elements_customer_hub_list_items: {
    linkTable: "components_elements_customer_hub_card_cmps",
    linkField: "customer_hub_card_id",
  },
  components_elements_grid_card_items: {
    linkTable: "components_elements_grid_cards_cmps",
    linkField: "grid_card_id",
  },
  components_elements_grid_cards: {
    linkTable: "components_elements_grid_cards_cmps",
    linkField: "grid_card_id",
  },
  components_elements_news_slider_items: {
    linkTable: "components_elements_news_sliders_slider_items_lnk",
    linkField: "news_item_id",
  },
  components_elements_news_sliders: {
    linkTable: "components_elements_news_sliders_news_items_lnk",
    linkField: "news_slider_id",
  },
  components_elements_news_sliders_slider_items_lnk: {
    linkTable: "components_elements_news_slider_items_news_item_lnk",
    linkField: "news_item_id",
  },
  components_layout_core_values: {
    linkTable: "components_layout_core_values_cmps",
    linkField: "entity_id",
  },
  components_layout_integrated_models: {
    linkTable: "components_layout_integrated_models_cmps",
    linkField: "entity_id",
  },
  components_layout_menu_sections: {
    linkTable: "components_layout_menu_sections_cmps",
    linkField: "entity_id",
  },
  components_layout_section_containers: {
    linkTable: "components_layout_section_containers_cmps",
    linkField: "entity_id",
  },
  components_layout_textand_medias: {
    linkTable: "components_layout_textand_medias_cmps",
    linkField: "entity_id",
  },
  components_layout_transport_services: {
    linkTable: "components_layout_transport_services_cmps",
    linkField: "entity_id",
  },
};

const runQuery = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

async function hero_section_mapping(collectionName, hits) {
    console.log("Hero Section Mapping Invoked for collection:", collectionName, hits);
}

// Fetch URLs for all hits in a collection
async function enrich_collection_with_urls(collectionName, hits) {
  // Handle Hero Section mapping
  if (collectionName == "components_layout_hero_sections") {
    hero_section_mapping(collectionName, hits);
  }
  if (
    collectionName?.includes("footer") ||
    collectionName?.includes("navbar") ||
    collectionName?.includes("nav_bar") ||
    collectionName?.includes("nav_items") ||
    collectionName?.includes("integrated_solutions") ||
    collectionName?.includes("legal") ||
    collectionName?.includes("linkitems") ||
    collectionName?.includes("links") ||
    collectionName?.includes("quick_links") ||
    collectionName?.includes("social")
  ) {
    return hits.map((hit) => ({ ...hit, url: "/", all_pages: [] }));
  }
  if (
    collectionName?.includes("about_us") ||
    collectionName?.includes("aboutus") ||
    collectionName?.includes("core_value_items") ||
    collectionName?.includes("expansions") ||
    collectionName?.includes("location") ||
    collectionName?.includes("meet_teams") ||
    collectionName?.includes("our_services") ||
    collectionName?.includes("services")
  ) {
    return hits.map((hit) => ({ ...hit, url: "/about", all_pages: [] }));
  }
  if (collectionName?.includes("btriple")) {
    return hits.map((hit) => ({ ...hit, url: "/b-triple", all_pages: [] }));
  }
  if (collectionName?.includes("home_page")) {
    return hits.map((hit) => ({ ...hit, url: "/", all_pages: [] }));
  }
  if (
    collectionName?.includes("industries") ||
    collectionName?.includes("industry")
  ) {
    return hits.map((hit) => ({ ...hit, url: "/industries", all_pages: [] }));
  }
  if (collectionName?.includes("transport")) {
    return hits.map((hit) => ({ ...hit, url: "/transport", all_pages: [] }));
  }
  if (collectionName?.includes("warehouse")) {
    return hits.map((hit) => ({ ...hit, url: "/warehousing", all_pages: [] }));
  }
  if (
    collectionName?.includes("sustainability") ||
    collectionName?.includes("sustainabilities") ||
    collectionName?.includes("safetyandcompliances") ||
    collectionName?.includes("layout_compliance_sections")
  ) {
    return hits.map((hit) => ({
      ...hit,
      url: "/environment&compliance",
      all_pages: [],
    }));
  }
  if (
    collectionName?.includes("news") ||
    collectionName?.includes("posts") ||
    collectionName?.includes("recent_news")
  ) {
    return hits.map((hit) => ({ ...hit, url: "/news", all_pages: [] }));
  }

  // Fetch pages from database
//   else {
//     const config = COLLECTION_URL_CONFIG[collectionName];
//     const documentIds = hits.map((hit) => hit.document.id);

//     if (documentIds.length === 0) {
//       return hits;
//     }

//     try {
//       // Batch query for all component-page associations
//       const placeholders = documentIds.map(() => "?").join(",");
//       const sql = `
//         SELECT 
//           l.${config.linkField} as component_id,
//           p.id as page_id,
//           p.slug,
//           p.title
//         FROM pages AS p
//         JOIN ${config.linkTable} AS l ON p.id = l.entity_id
//         WHERE l.${config.linkField} IN (${placeholders})
//     `;
//       const pages = await runQuery(sql, documentIds);

//       // Group pages by component ID
//       const pagesByComponent = {};
//       pages.forEach((page) => {
//         if (!pagesByComponent[page.component_id]) {
//           pagesByComponent[page.component_id] = [];
//         }
//         pagesByComponent[page.component_id].push({
//           page_id: page.page_id,
//           slug: page.slug,
//           title: page.title || page.slug,
//           url: `/${page.slug}`,
//         });
//       });

//       // Enrich hits with page data
//       return hits.map((hit) => {
//         const componentPages = pagesByComponent[hit.document.id] || [];
//         return {
//           ...hit,
//           url: componentPages[0]?.url || "#",
//           all_pages: componentPages,
//         };
//       });
//     } catch (error) {
//       logger.error(`Failed to fetch URLs for ${collectionName}:`, error);
//       return hits.map((hit) => ({ ...hit, url: "#", all_pages: [] }));
//     }
//   }

  return hits;
}

module.exports = {
  enrich_collection_with_urls,
};
