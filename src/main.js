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


form.addEventListener('submit', e => {
  e.preventDefault();
  const galleryLightBox = new SimpleLightbox('.gallery-photo a');
  gallery.innerHTML = '';

  if (!input.value) {
    showErrorPopUp(CONSTANTS.ERROR_MESSAGES.EMPTY_INPUT);
  } else {
    loader.classList.remove('hidden');

    urlCreator(input.value)
      .then(({data : {hits}}) => {
      if (!hits.length) {
        showErrorPopUp(CONSTANTS.ERROR_MESSAGES.IMAGES_NOT_FOUND);
      } else {
        gallery.insertAdjacentHTML('beforeend', htmlMarkupCreator(hits));
        galleryLightBox.refresh();
      }
      loader.classList.add('hidden');
    }).catch(error => {
      console.debug(error);
      showErrorPopUp(CONSTANTS.ERROR_MESSAGES.RESOURSE_ERROR);
    });
  }
});

function showErrorPopUp(message) {
  iziToast.show({
    ...CONSTANTS.POP_UP_CONFIG,
    message,
  });
}
