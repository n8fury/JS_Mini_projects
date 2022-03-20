// Api(UNSPLASH)
const apiKey = 't_4J4GMWETZ55kdAKMuaQ9IYnazVh0UhzFaTX-RDWZQ';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
  } catch (error) {

  }
}


getPhotos();