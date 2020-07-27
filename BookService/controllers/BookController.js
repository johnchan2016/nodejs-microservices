const Book = require("./../services/BookService");

function BookController() {
  const listBooks = function(req, res) {
    Book.list().then(data => res.json(data));
  };

  const getBook = function(req, res) {
    Book.get(req.param.id).then(data => res.json(data));
  };

  const addBooks = function(req, res) {
    Book.add(req.body).then(data => res.json(data));
  };

  return {
    list: listBooks,
    get: getBook,
    add: addBooks,
  };
}

module.exports = BookController();