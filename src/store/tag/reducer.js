import { ALL_TAGS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_TAGS:
      return { ...state, allTags: action.payload };

    default:
      return state;
  }
};
