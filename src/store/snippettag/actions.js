import Api from "../../Api";

import { fetchTags } from "../tag/actions";

export const ALL_SNIPPETTAGS = "ALL_SNIPPETTAGS";

export const fetchSnippetTags = () => {
  return async (dispatch, getState) => {
    try {
      const res = await Api("snippets-tags", { method: "GET" });

      dispatch({ type: ALL_SNIPPETTAGS, payload: res.data });
      dispatch(fetchTags());
    } catch (e) {
      console.log(e);
    }
  };
};
