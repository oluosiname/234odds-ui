import { combineReducers } from "redux";
import newsReducer from "./news/news-reducer";
import eventsReducer from "./events/events-reducer";
import appReducer from "./app/app-reducer";

const rootReducer = combineReducers({
  newsReducer,
  eventsReducer,
  appReducer,
});

export default rootReducer;
