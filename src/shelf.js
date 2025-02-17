function shelfBook(book, shelf) {
  if (shelf.length + 1 <= 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
      sciFiShelf.splice(i, 1);
    }
  }
}

function listTitles(fantasyShelf) {
  var titlesList = "";
  for (var i = 0; i < fantasyShelf.length; i++) {
    if (i === fantasyShelf.length - 1) {
      titlesList = titlesList + fantasyShelf[i].title
    } else {
      titlesList = titlesList + (fantasyShelf[i].title + ", ");
    }
  }
  return titlesList;
}

function searchShelf(shelfName, bookTitle) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
