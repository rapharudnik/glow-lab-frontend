import { UNSPLASH_BASE_URL } from "./constants";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Erro: ${res.status}`);
}

export function searchPhotos(query) {
  return fetch(
    `${UNSPLASH_BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    },
  ).then(checkResponse);
}
