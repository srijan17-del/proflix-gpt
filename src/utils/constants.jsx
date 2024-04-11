export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPP_LANG = [
  {
    identifier: "en",
    name: "English",
  },
  { identifier: "hindi", name: "हिंदी" },
  {
    identifier: "spanish",
    name: "español",
  },
];

export const API_KEY = import.meta.env.VITE_GEMAI_KEY;
