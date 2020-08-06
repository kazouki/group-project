export const SELECTED_TAGS = "SELECTED_TAGS";

export const setSelectedTags = (tagState) => (dispatch) =>
  dispatch({ type: SELECTED_TAGS, payload: tagState });
