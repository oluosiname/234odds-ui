export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

const initialState = {
  isMenuOpen: false,
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      document.body.style.overflow = "hidden";
      return { ...state, isMenuOpen: true };
    case CLOSE_MENU:
      document.body.style.overflow = "auto";
      return { ...state, isMenuOpen: false };

    default:
      return state;
  }
};

export default appReducer;
