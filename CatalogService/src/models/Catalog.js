const Catalogs = [
  {
    catalogId: 11,
    title: "Works for an assortment of other financial businesses",
    theme: 'finance',
    price: 99.99
  },
  {
    catalogId: 12,
    title: "Create a nifty online presence for your walking, daycare, grooming and other pet and animal services",
    theme: 'animals',
    price: 10.09
  },
  {
    catalogId: 13,
    title: "Push your apartments and rooms over and beyond with a killer online presence.",
    theme: 'hotel',
    price: 29.99
  },
  {
    catalogId: 14,
    title: "Create a strong impact on the industry with The Quest",
    theme: 'gaming',
    price: 15.99
  }
]

function Catalog() {
  const getAll = () => {
    return new Promise((resolve, reject) => {
      return resolve(Catalogs);
    })
  }

  const getCatalog = (id) => {
    return new Promise((resolve, reject) => {
      var cats = Catalogs.filter(b => b.catalogId == id);
      console.log('getCatalog/cats', cats);
      if (cats.length === 0) {return resolve(null);}
      
      return resolve(cats[0]);
    })
  }

  const getCatalogs = (ids) => {
    return new Promise((resolve, reject) => {
      var cats = ids.reduce((pre, curId) => {
        var cat = Catalogs.filter(b => b.catalogId == curId)[0];
        pre.push(cat);
        return pre;
      }, [])

      return resolve(cats);
    })
  }

  return {
    getAll: () => getAll(),
    getCatalog: (id) => getCatalog(id),
    getCatalogs: (ids) => getCatalogs(ids)
  }
}

module.exports = Catalog();