import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  smoothScroll,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentQuery;
let currentPage;
let totalPages;
let totalHits;

form.addEventListener('submit', async event => {
  event.preventDefault();
  currentQuery = event.target.elements['search-text'].value.trim();

  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Введіть дані для пошуку',
      timeout: 1000,
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  hideLoadMoreButton();
  showLoader();
  currentPage = 1;

  try {
    const response = await getImagesByQuery(currentQuery, currentPage);
    totalHits = response.totalHits;
    totalPages = Math.ceil(totalHits / 15);

    if (response.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        timeout: 1000,
        position: 'topRight',
      });
    } else {
      createGallery(response.hits);
      smoothScroll();
      if (currentPage < totalPages) {
        showLoadMoreButton();
      }
    }
  } catch {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      timeout: 1000,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  try {
    showLoader();
    currentPage += 1;

    const newImages = await getImagesByQuery(currentQuery, currentPage);
    createGallery(newImages.hits);
    smoothScroll();

    if (currentPage >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message:
          'We are sorry, but you have reached the end of search results.',
        timeout: 1000,
        position: 'topRight',
      });
    }
  } catch {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      timeout: 1000,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
