import {
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_PAGES
} from "./searchTypes";

const initialState = {
  search: [],
  loading: false,
  error: "",
  pages: 0,
  page: 1
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.payload,
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        search: action.payload,
        error: ""
      };
    case FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        search: [],
        error: action.payload,
        pages: 0
      };
      case FETCH_SEARCH_PAGES:
      return {
        ...state,
        pages: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
