const Catalog = require("../models/Catalog");

function CatalogService() {
  return {
    getAll: () => Catalog.getAll(),
    getCatalog: (id) => Catalog.getCatalog(id), 
    getCatalogs: (ids) => Catalog.getCatalogs(ids), 
  };
}

module.exports = CatalogService();