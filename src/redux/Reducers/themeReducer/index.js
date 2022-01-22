import { DARK, LIGHT, SET_DARK, SET_LIGHT } from "./constants";

const initialState = DARK;

const themeReducer = (state = initialState, action = {}) => {
  const { type } = action;

  switch (type) {
    case SET_DARK: {
      return DARK;
    }
    case SET_LIGHT: {
      return LIGHT;
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
