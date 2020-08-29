// Create variables targetting the relevant DOM elements here 👇
var image = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var phrase1 = document.querySelector('.tagline-1');
var phrase2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.onload = randomBook;
randomCoverButton.addEventListener('click', randomBook);
makeNewCoverButton.addEventListener('click', showFormView);
viewSavedButton.addEventListener('click', showSavedView);
homeButton.addEventListener('click', showHomeView);

// Create your event handlers and other functions here 👇
function displayCover(randomCover, randomTitle, randomPhrase1, randomPhrase2) {
  image.src = randomCover;
  title.innerText = randomTitle;
  phrase1.innerText = randomPhrase1;
  phrase2.innerText = randomPhrase2;
}

function randomBook() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomPhrase1 = descriptors[getRandomIndex(descriptors)];
  var randomPhrase2 = descriptors[getRandomIndex(descriptors)];
  //currentCover = new Cover(randomCover, randomTitle, randomPhrase1, randomPhrase2);
  displayCover(randomCover, randomTitle, randomPhrase1, randomPhrase2);
}

function showFormView() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
};

function showSavedView() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
}

function showHomeView() {
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
