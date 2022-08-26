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

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
