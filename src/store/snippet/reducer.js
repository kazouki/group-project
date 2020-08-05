import { NEW_SNIPPET_SUCCESS, ALL_SNIPPETS, UPDATE_SNIPPETS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_SNIPPET_SUCCESS:
      return { ...state, ...action.payload };
    case ALL_SNIPPETS:
      return { ...state, snippets: action.payload.snippets };
    case UPDATE_SNIPPETS:
      return { ...state, snippets: action.payload.snippets };

    default:
      return state;
  }
};
