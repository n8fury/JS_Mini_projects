let photosArray = [];
let loaded_photos = 0;
let total_photos = 0;
let images_loaded = false;
let index = 3;
const photoContainer = document.getElementById("photo-container");
const loader = document.getElementById("loader");
// Api(UNSPLASH)
const apiKey = [
  'zk-c3koRKsWJveqTao84FGHFruXOaqN2BhbavpV5fzA',
  'O6g1epYBncX_p19uDToM5hDFpBxeNfZHRow6vFIPqt4',
  't_4J4GMWETZ55kdAKMuaQ9IYnazVh0UhzFaTX-RDWZQ',
  'nA_69PX80YlXN3kYA76PuvYjeAGUkyHdaXnAE1gkvBU'
];
const count = 30;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey[index]}&count=${count}`;
// Fetching data from the API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const photosArray = await res.json();
    displayPhotos(photosArray);
  } catch (error) {
    index++;
    reset_api_key();
  }
}
// to reset api_key count
function reset_api_key() {
  if (index > 3) {
    index = 0;
  } else {
    index++;
  }
}
// check if all images are loaded or not
function load_check() {
  loaded_photos++;
  if (loaded_photos === total_photos) {
    // to hide the loader
    loader.hidden = true;
    images_loaded = true;
  }
}
// set_attribute function
function set_attribute(element, attributes) {
  // gets each attribute and set them to their own element.
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// display photos
function displayPhotos(array) {
  total_photos = array.length;
  array.forEach((photo) => {
    // created anchor elements  and set attributes
    const anchor = document.createElement("a");
    set_attribute(anchor, {
      "href": photo.links.html,
      "target": "_blank"
    });
    // created img element and set attributes
    const img = document.createElement("img");
    set_attribute(img, {
      "src": photo.urls.regular,
      "alt": photo.alt_description,
      "title": photo.alt_description
    });
    img.addEventListener("load", load_check);
    // set img as a child element of anchor
    anchor.appendChild(img);
    // set anchor as a child element of photoContainer
    photoContainer.appendChild(anchor);
  });
}
getPhotos();
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800 && images_loaded) {
    getPhotos();
    images_loaded = false;
    loaded_photos = 0;
  }
});