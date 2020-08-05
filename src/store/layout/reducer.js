import { SELECTED_TAG } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAG:
      return { ...state, selectedTag: action.payload };

    default:
      return state;
  }
};
