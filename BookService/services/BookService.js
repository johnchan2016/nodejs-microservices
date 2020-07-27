const Book = require("../models/Book");

function BookService() {
  return {
    list: () => Book.find(),
    get: (id) => Book.findById(id), 
    add: data => new Book(data).save(),
    delete: id => Book.findByIdAndRemove(id)
  };
}

module.exports = BookService();