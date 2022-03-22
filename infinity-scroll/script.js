const photoContainer = document.getElementById("photo-container");
const loader = document.getElementById("loader");
let photosArray = [];
let loaded_photos = 0;
let total_photos = 0;
let images_loaded = false;
// Api(UNSPLASH)
const apiKey = 'zk-c3koRKsWJveqTao84FGHFruXOaqN2BhbavpV5fzA';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// to view loading_animation
function loading_animation() {
  
}

// check if all images are loaded or not
function load_check() {
  loaded_photos++;
  if (loaded_photos === total_photos) {
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
// Fetching data from the API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const photosArray = await res.json();
    displayPhotos(photosArray);
  } catch (error) {

  }
}
getPhotos();
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800 && images_loaded) {
    getPhotos();
    images_loaded = false;
    loaded_photos = 0;
  }
});