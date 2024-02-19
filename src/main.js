import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { CONSTANTS } from './js/constants';
import { urlCreator } from './js/pixabay-api.js';
import { htmlMarkupCreator } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let pageParam = 1;
let inputValue = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const galleryLightBox = new SimpleLightbox('.gallery-photo a');
  gallery.innerHTML = '';

  if (!input.value) {
    showErrorPopUp(CONSTANTS.ERROR_MESSAGES.EMPTY_INPUT);
  } else {
    loader.classList.remove('hidden');

    urlCreator(input.value, pageParam)
      .then(({ data: { hits } }) => {
        if (!hits.length) {
          showErrorPopUp(CONSTANTS.ERROR_MESSAGES.IMAGES_NOT_FOUND);
        } else {
          inputValue.push(input.value);
          console.log(inputValue);
          gallery.insertAdjacentHTML('beforeend', htmlMarkupCreator(hits));
          galleryLightBox.refresh();
        }
        loader.classList.add('hidden');
      })
      .catch(error => {
        console.debug(error);
        showErrorPopUp(CONSTANTS.ERROR_MESSAGES.RESOURSE_ERROR);
      });
  }
  if (inputValue.length >= 2) {
    console.log(
      inputValue[inputValue.length - 1],
      inputValue[inputValue.length - 2]
    );
    if (
      inputValue[inputValue.length - 1] !== inputValue[inputValue.length-2]
    ) {
      inputValue = [];
      console.log(inputValue);
      pageParam = 0;
    }
  }
  pageParam++;
  console.log(pageParam);
});

function showErrorPopUp(message) {
  iziToast.show({
    ...CONSTANTS.POP_UP_CONFIG,
    message,
  });
}
