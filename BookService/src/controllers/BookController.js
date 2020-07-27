const BookService = require("./../services/BookService");

function BookController() {
  const listBooks = function(req, res) {
    return BookService.list().then(data => res.json(data));
  };

  const getBook = function (req, res) {
    return BookService.get(req.params.id).then(data => res.json(data));
  };

  const getBooks = function(req, res) {
    return BookService.getBooks(req.body.ids).then(data => res.json(data));
  };

  const addBooks = function(req, res) {
    return BookService.add(req.body);
  };

  return {
    list: listBooks,
    get: getBook,
    getBooks: getBooks,
    add: addBooks,
  };
}

module.exports = BookController();