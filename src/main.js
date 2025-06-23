import fetchImages from './js/pixabay-api';
import renderImages, { resetGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const query = e.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Введіть ключове слово для пошуку.',
      position: 'topRight',
    });
    return;
  }

  resetGallery();
  showLoader();

  fetchImages(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.info({
          message: 'Нічого не знайдено. Спробуйте інший запит.',
          position: 'topRight',
        });
        return;
      }
      renderImages(hits);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      iziToast.error({
        message: 'Не вдалося отримати зображення. Спробуйте пізніше.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
