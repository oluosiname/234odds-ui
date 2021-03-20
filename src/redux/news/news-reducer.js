import axios from "axios";

export const FETCH_NEWS = "FETCH_NEWS";

export const getNews = () => {
  return async (dispatch, _getState) => {
    const res = await axios.get(
      "https://site.api.espn.com/apis/site/v2/sports/soccer/all/news?limit=5"
    );

    console.log("all data", res.data);
    dispatch({ type: FETCH_NEWS, payload: res.data.articles });
  };
};

const initialState = [
  {
    images: [
      {
        name: "Southampton thrashes Bournemouth to reach FA Cup semis",
        width: 576,
        alt: "",
        caption:
          "Nathan Redmond shines as Southampton advances to the FA Cup semifinals after a 3-0 win against Bournemouth.",
        url:
          "https://a.espncdn.com/media/motion/ESPNi/2021/0320/int_210320_Southampton_thrashes_Bournemouth_to_reach_FA_Cup__semis/int_210320_Southampton_thrashes_Bournemouth_to_reach_FA_Cup__semis.jpg",
        height: 324,
      },
    ],
    description:
      "Nathan Redmond shines as Southampton advances to the FA Cup semifinals after a 3-0 win against Bournemouth.",
    links: {
      web: {
        href: "http://www.espn.com/soccer/english-fa-cup/40/video/4341740",
        short: {},
      },
    },
    headline: "Southampton thrashes Bournemouth to reach FA Cup semis",
  },
];
const newsReducer = (state = { news: initialState }, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};

export default newsReducer;
