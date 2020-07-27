const Book = require("../models/Book");

function BookService() {
  return {
    list: () => Book.list(),
    get: (id) => Book.findById(id), 
    add: data => Book.add(data),
  };
}

module.exports = BookService();