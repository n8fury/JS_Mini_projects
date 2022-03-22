const photoContainer = document.getElementById("photo-container");
const loader = document.getElementById("loader");

let photosArray = [];
// Api(UNSPLASH)
const apiKey = 'zk-c3koRKsWJveqTao84FGHFruXOaqN2BhbavpV5fzA';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// set_attribute function

function set_attribute(element, attributes) {
  // gets each attribute and set them to their own element.
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// display photos
function displayPhotos(array) {
  array.forEach((photo) => {
    // created anchor elements  and set attributes
    const anchor = document.createElement("a");
    // anchor.setAttribute("href", photo.links.html);
    // anchor.setAttribute("target", "_blank");
    set_attribute(anchor, {
      "href": photo.links.html,
      "target": "_blank"
    });
    // created img element and set attributes
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    set_attribute(img, {
      "src": photo.urls.regular,
      "alt": photo.alt_description,
      "title": photo.alt_description
    });
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