const axios = require('axios');

const { baseURL, ports } = require("../config/env");

function Order() {
  const calculate = async (data) => {
    var result = await RequestApis(data);

    var allBooks = result[0].data;
    var allCatalogs = result[1].data;
  
    const totalBookPrice = allBooks.reduce((pre, cur) => pre + cur.price, 0);
    const totalCatalogPrice = allCatalogs.reduce((pre, cur) => pre + cur.price, 0);

    const totalPrice = +(totalBookPrice + totalCatalogPrice).toFixed(12) ;

    return totalPrice;    
  }

  return {
    calculate: (data) => calculate(data),
  }
}

async function RequestApis(data) {
  return Promise.all([GetBooks(data.bookIds), GetCatalogs(data.catalogIds)]);;
}

function GetBooks(ids) {
  let url = `http://bookservice-demo.com/api/book/getbooks`;
  return axios.post(url, {ids: ids});
}

function GetCatalogs(ids) {
  let url = `http://catalogservice-demo.com/api/catalog/getCatalogs`;
  return axios.post(url, { ids: ids });
}

module.exports = Order();