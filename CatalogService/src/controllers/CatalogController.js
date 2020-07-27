const CatalogService = require("../services/CatalogService");

function CatalogController() {
  const getAll = function(req, res) {
    return CatalogService.getAll().then(data => res.json(data));
  };

  const getCatalog = function(req, res) {
    return CatalogService.getCatalog(req.params.id).then(data => res.json(data));
  };

  const getCatalogs = function(req, res) {
    return CatalogService.getCatalogs(req.body.ids).then(data => res.json(data));
  };

  return {
    getAll: getAll,
    getCatalog: getCatalog,
    getCatalogs: getCatalogs,
  };
}

module.exports = CatalogController();