import {
  SEARCH_RECEIPE,
  FETCH_RECEIPE,
  FETCH_RECEIPES,
  LOADING,
} from "./types";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchReceipe = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_RECEIPE,
    payload: text,
  });
};

export const fetchReceipes = (text) => (dispatch) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/search?apiKey=${APIKey}&query=${text}&number=20`
    )
    .then((response) =>
      dispatch({
        type: FETCH_RECEIPES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchReceipe = (id) => (dispatch) => {
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=d5795c27891047bc872005864216e292&includeNutrition=false`
    )
    .then((res) =>
      dispatch({
        type: FETCH_RECEIPE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
