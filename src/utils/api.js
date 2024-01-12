import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = { Authorization: "bearer " + TMDB_TOKEN };

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Headers -> They are passed to that if we want the response to be in json we can set according to our own way
// for ex -> Accept: application/json
