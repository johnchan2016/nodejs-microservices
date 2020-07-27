const Book = require("../models/Book");

function BookService() {
  return {
    list: () => Book.list(),
    get: (id) => Book.findBook(id), 
    getBooks: (ids) => Book.findBooks(ids),
    add: data => Book.add(data),
  };
}

module.exports = BookService();