import BLOG from "../BLOG.config";

const API_CLIENTID = BLOG.unsplashApiKey;
const API_URL = `https://api.unsplash.com/photos/random?client_id=${API_CLIENTID}&query=nature&count=1`;

let GenerateImage = async () => {
  let images = await fetch(API_URL).then((response) => response.json());
  // .then((result) => result.results);
  return images[0];
};
export default GenerateImage;
