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
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descOneInput = document.querySelector('.user-desc1');
var descTwoInput = document.querySelector('.user-desc2');
var createBookButton = document.querySelector('.create-new-book-button');


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
createBookButton.addEventListener('click', createUserBook);


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
  addHidden([homeView, randomCoverButton, saveCoverButton, savedView]);
  removeHidden([formView, homeButton]);
};

function showSavedView() {
  addHidden([homeView, randomCoverButton, saveCoverButton, formView]);
  removeHidden([savedView, homeButton]);
}

function showHomeView() {
  addHidden([homeButton, formView]);
  removeHidden([homeView, randomCoverButton, saveCoverButton, viewSavedButton]);
}

function addHidden(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
}

function removeHidden(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
    }
}

function addInputs() {
    covers.unshift(coverInput.value);
    titles.unshift(titleInput.value);
    descriptors.splice(0, 0, descOneInput.value, descTwoInput.value);
}

function displayUserBook() {
  image.src = covers[0];
  title.innerText = titles[0];
  phrase1.innerText = descriptors[0];
  phrase2.innerText = descriptors[1];
}

function createUserBook() {
    event.preventDefault();
    addInputs();
    currentCover = new Cover(covers[0], titles[0], descriptors[0], descriptors[1]);
    displayUserBook();
    showHomeView();
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};