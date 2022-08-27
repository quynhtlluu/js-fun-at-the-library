function createTitle(bookIdea) {
  console.log("The " + bookIdea);
  return ("The " + bookIdea);
}

createTitle();

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {};

  mainCharacter.name = name;
  mainCharacter.age = age;
  mainCharacter.pronouns = pronouns;

  console.log(mainCharacter);
  return mainCharacter;
};

buildMainCharacter();

var reviews = [];
function saveReview(writtenReview, reviews) {
  reviews.push(writtenReview);
  for (i = 0; i < reviews.length - 1; i++) {
    if (writtenReview === reviews[i]) {
      reviews.pop();
      break;
    }
  } console.log(reviews);
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
