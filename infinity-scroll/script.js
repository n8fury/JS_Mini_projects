const imageContainer = document.getElementById("photo-container");
const loader = document.getElementById("loader");

let photosArray = [];
// Api(UNSPLASH)
const apiKey = 't_4J4GMWETZ55kdAKMuaQ9IYnazVh0UhzFaTX-RDWZQ';
const count = 40;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const photosArray = await res.json();
    console.log(photosArray);
  } catch (error) {

  }
}


getPhotos();