import { FETCH_NEWS } from "../action-types";

const newsReducer = (state = { news: [1, 2, 3] }, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: [6, 7, 8] };

    default:
      return state;
  }
};

export default newsReducer;
