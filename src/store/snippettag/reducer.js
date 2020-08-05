import { ALL_SNIPPETTAGS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_SNIPPETTAGS:
      return { ...state, allSnippetTags: action.payload.snippetTag };

    default:
      return state;
  }
};
