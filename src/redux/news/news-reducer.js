import axios from "axios";

export const FETCH_NEWS = "FETCH_NEWS";

export const getNews = () => {
  return async (dispatch, _getState) => {
    const res = await axios.get(
      "https://site.api.espn.com/apis/site/v2/sports/soccer/all/news?limit=5"
    );

    dispatch({ type: FETCH_NEWS, payload: res.data.articles });
  };
};

const newsReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};

export default newsReducer;
