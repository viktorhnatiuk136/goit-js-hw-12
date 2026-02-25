import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const divLoader = document.querySelector('.loader');
const listImages = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more-btn');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(arr) {
  let markup = arr
    .map(
      item => `
        <li class="gallery-item">
            <a href="${item.largeImageURL}">
                <img class="gallery-img" src="${item.webformatURL}" alt="${item.tags}"/>
            </a>
            <ul class="descr">
                <li class="descr-item">
                    <span class="descr-head">Likes</span>
                    <span class="descr-text">${item.likes}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Views</span>
                    <span class="descr-text">${item.views}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Comments</span>
                    <span class="descr-text">${item.comments}</span>
                </li>
                <li class="descr-item">
                    <span class="descr-head">Downloads</span>
                    <span class="descr-text">${item.downloads}</span>
                </li>
            </ul>
        </li>`
    )
    .join('');

  listImages.insertAdjacentHTML('beforeend', markup);
  lightBox.refresh();
}

export function clearGallery() {
  listImages.innerHTML = '';
}

export function showLoader() {
  divLoader.classList.add('css-loader');
}

export function hideLoader() {
  divLoader.classList.remove('css-loader');
}

export function showLoadMoreButton() {
  btnLoadMore.classList.remove('btn-hidden');
}

export function hideLoadMoreButton() {
  btnLoadMore.classList.add('btn-hidden');
}
