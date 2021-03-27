import { combineReducers } from "redux";
import newsReducer from "./news/news-reducer";
import eventsReducer from "./events/events-reducer";

const rootReducer = combineReducers({
  newsReducer,
  eventsReducer,
});

export default rootReducer;
