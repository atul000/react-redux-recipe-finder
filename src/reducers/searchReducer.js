import {
  SEARCH_RECEIPE,
  FETCH_RECEIPE,
  FETCH_RECEIPES,
  LOADING,
} from "../actions/types";

const initialState = {
  text: "",
  receipes: [],
  loading: false,
  receipe: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RECEIPE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_RECEIPES:
      return {
        ...state,
        receipes: action.payload,
        loading: false,
      };
    case FETCH_RECEIPE:
      return {
        ...state,
        receipe: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
