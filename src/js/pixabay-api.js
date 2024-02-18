import axios from 'axios';
import { CONSTANTS } from './constants.js';

export async function urlCreator(searchedPhoto) {
  const getUrl = await axios.get(CONSTANTS.API_URL, {
      params: {
        key: CONSTANTS.API_KEY,
        q: searchedPhoto,
        image_type: CONSTANTS.IMAGE_TYPE,
        orientation: CONSTANTS.PHOTO_ORIENTATION,
        safesearch: CONSTANTS.SAFESEARCH,
      },
    })
  return getUrl;
}
// export const getUrl = axios.get(CONSTANTS.API_URL, {
//   params: {
//     key: CONSTANTS.API_KEY,
//     q: null,
//     image_type: CONSTANTS.IMAGE_TYPE,
//     orientation: CONSTANTS.PHOTO_ORIENTATION,
//     safesearch: CONSTANTS.SAFESEARCH,
//   },
// });
