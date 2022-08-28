function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, bookName) {
  var genre = bookName.genre
  library.shelves[genre].unshift(bookName)
}

function checkoutBook(library, bookName, genre) {
  var shelf = library.shelves[genre];
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1);
      return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};
