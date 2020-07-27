const Books = [
  {
    bookId: 1,
    title: "Eloquent JavaScript, Second Edition",
    author: 'Marijn Haverbek',
    category: '',
    published: "2014-12-14T00:00:00.000Z",
    pages: 472,
    website: "http://eloquentjavascript.net/",
    price: 10.02
  },
  {
    bookId: 2,
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
    pages: 254,    
    website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
    price: 23.88
  },
  {
    bookId: 3,
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
    pages: 460,
    website: "http://speakingjs.com/",
    price: 11.99
  },
  {
    bookId: 4,
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
    pages: 330,    
    website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
    price: 99.99
  }
]

function Book() {
  const list = () => {
    return new Promise((resolve, reject) => {
      return resolve(Books);
    })
  };

  const findBook = (id) => {
    return new Promise((resolve, reject) => {
      var bks = Books.filter(b => b.bookId == id);
      if (bks.length === 0) {return null;}
      
      return resolve(bks[0]);
    })
  }

  const findBooks = (ids) => {
    return new Promise((resolve, reject) => {
      var books = ids.reduce((pre, curId) => {
        var bk = Books.filter(b => b.bookId == curId);
        pre.push(bk[0]);
        console.log('findBooks/pre', pre);
        return pre;
      }, [])

      console.log('findBooks/books', books);
      return resolve(books);
    })
  }

  const add = (book) => {
    Books.push(book);
    return true;
  }

  return {
    list: () => list(),
    findBook: (id) => findBook(id),
    findBooks: (ids) => findBooks(ids),
    add: (book) => add(book),
  }
}

module.exports = Book();