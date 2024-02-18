import axios from 'axios';
import { createLogger } from 'vite';
export async function fetchPhotos (){
  const axiosFetchApi = {
    baseURL: 'https://pixabay.com/api/',
    defaults: {
      headers: {
        common: '42384910-73277182c896d015737fb8e33'
      }
    }, params: {
      q: null,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true}
  }
  console.log(axiosFetchApi);
  return 1;
}