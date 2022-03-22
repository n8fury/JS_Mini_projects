const photoContainer = document.getElementById("photo-container");
const loader = document.getElementById("loader");

let photosArray = [];
// Api(UNSPLASH)
const apiKey = 'zk-c3koRKsWJveqTao84FGHFruXOaqN2BhbavpV5fzA';
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// display photos
function displayPhotos(array) {
  array.forEach((photo) => {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", photo.links.html);
    anchor.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    anchor.appendChild(img);
    photoContainer.appendChild(anchor);
    console.log("working");
  });
}
// Fetching data from the API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const photosArray = await res.json();
    console.log(photosArray);
    displayPhotos(photosArray);
    console.log("working_2");
  } catch (error) {

  }
}


getPhotos();