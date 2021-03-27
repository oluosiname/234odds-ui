import axios from "axios";

export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_EVENT = "FETCH_EVENT";
export const FETCH_EVENTS_PENDING = "FETCH_EVENTS_PENDING";
export const FETCH_EVENT_PENDING = "FETCH_EVENT_PENDING";

export const getEvents = ({ competition, search, country, date }) => {
  return async (dispatch, _getState) => {
    dispatch({ type: FETCH_EVENTS_PENDING });
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`, {
      params: { competition, search, country, date: date },
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });

    dispatch({ type: FETCH_EVENTS, payload: res.data });
  };
};

export const getEvent = (selectedEventId) => {
  return async (dispatch, _getState) => {
    dispatch({ type: FETCH_EVENTS_PENDING });
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/events/${selectedEventId}`,
      {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      }
    );

    dispatch({ type: FETCH_EVENT, payload: res.data.event });
  };
};

const initialState = {
  events: [],
  event: {},
  isFetching: false,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, events: action.payload, isFetching: false };
    case FETCH_EVENT:
      return { ...state, event: action.payload, isFetching: false };
    case FETCH_EVENTS_PENDING:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default eventsReducer;
