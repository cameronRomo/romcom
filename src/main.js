// Create variables targetting the relevant DOM elements here 👇
var image = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var phrase1 = document.querySelector('.tagline-1');
var phrase2 = document.querySelector('.tagline-2')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.onload = randomBook;

// Create your event handlers and other functions here 👇

function randomBook() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomPhrase1 = descriptors[getRandomIndex(descriptors)];
  var randomPhrase2 = descriptors[getRandomIndex(descriptors)];
  // currentCover = new Cover(randomCover, randomTitle, randomPhrase1, randomPhrase2);
  image.src = randomCover;
  title.innerText = randomTitle;
  phrase1.innerText = randomPhrase1;
  phrase2.innerText = randomPhrase2;
};


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
