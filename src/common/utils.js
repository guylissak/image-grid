import axios from "axios";
import { API_KEY, ENDPOINT_URL } from "../configs";

// Add API key to headers
const headers = {};
headers["Content-Type"] = "application/json";
headers["x-api-key"] = API_KEY;
const config = { headers };

// Generate array of 5 random number, the algorithm designed so there will be no duplicates at all.
// Not between the elements themselves, and not between the new array to previous array.
export const generateArrayOfFiveRandomNumbers = (prevNumbersArr, maxRandomVal) => {
  const newRandomNumbersArr = [];

  if (maxRandomVal < prevNumbersArr.length * 2) {
    // Max random value must be at least prevNumbersArr.length * 2 to return unique numbers
    return [];
  }

  for (let i = 0; i < 5; ) {
    // On each returned random number make sure it doesn't appear in the current array or in previous array,
    // only then increase iterator.
    const randomNum = Math.floor(Math.random() * maxRandomVal);
    if (!prevNumbersArr.includes(randomNum) && !newRandomNumbersArr.includes(randomNum)) {
      newRandomNumbersArr.push(randomNum);
      i++;
    }
  }

  return newRandomNumbersArr;
};

// Get five random images from an endpoint
export const getFiveRandomImages = async (prevImages) => {
  // Access the endpoint via HTTP GET request
  const result = await axios.get(ENDPOINT_URL, config);
  const galleryImages = result.data;

  // Convert previous image ids to a list
  const prevImagesIds = prevImages.map((prevImage) => {
    return prevImage.imageId;
  });

  // Get array of random numbers
  const fiveRandomImageIndexes = generateArrayOfFiveRandomNumbers(prevImagesIds, galleryImages.length);

  const fiveRandomImages = fiveRandomImageIndexes.map((index) => {
    // The order of the images is always kept, hence add new attribute "imageId" = image index.
    galleryImages[index]["imageId"] = index;
    return galleryImages[index];
  });

  return fiveRandomImages;
};
