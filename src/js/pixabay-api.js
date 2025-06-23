import axios from 'axios';

export default function getImagesByQuery(query) {
  const API_KEY = '50853437-9ef5a88e343e45432612d628f';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/`, { params })
    .then(response => response.data);
}
