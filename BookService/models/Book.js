const Books = [
  {
    id: 1,
    title: "Eloquent JavaScript, Second Edition",
    author: 'Marijn Haverbek',
    category: '',
    published: "2014-12-14T00:00:00.000Z",
    pages: 472,
    website: "http://eloquentjavascript.net/"
  },
  {
    id: 2,
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
    pages: 254,    
    website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    id: 3,
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
    pages: 460,
    website: "http://speakingjs.com/"
  },
  {
    id: 4,
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
    pages: 330,    
    website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
  }
]

function Book() {
  const list = () => Books;

  const findById = (id) => {
    var bks = Books.filter(b => b.id);
    if (bks.length === 0) {return null;}
    
    return bks[0];
  }

  const add = (book) => {
    Books.push(book);
    return true;
  }

  return {
    list: () => list,
    findById: (id) => id,
    add: (book) => add(book),
  }
}

module.exports = Book();