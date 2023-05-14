import BLOG from "../BLOG.config";

const API_URL = BLOG.RandomImagesEndPoint;
let GenerateImage = async () => {
  let images = await fetch(API_URL).then((response) => response.json());
  // .then((result) => result.results);
  return images[0];
};
export default GenerateImage;
