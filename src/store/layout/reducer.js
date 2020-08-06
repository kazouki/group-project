import { SELECTED_TAGS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAGS:
      return {
        ...state,
        selectedTags: { ...state.selectedTags, ...action.payload },
      };

    default:
      return state;
  }
};
