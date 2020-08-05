export const SELECTED_TAG = "SELECTED_TAGS";

export const setSelectedTag = (tagId) => (dispatch) =>
  dispatch({ type: SELECTED_TAG, payload: tagId });
