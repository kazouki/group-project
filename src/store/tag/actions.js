import Api from "../../Api";

export const ALL_TAGS = "ALL_TAGS";

export const fetchTags = () => {
  return async (dispatch, getState) => {
    try {
      const res = await Api("tags", { method: "GET" });

      //TODO  check connection errors
      if (res) dispatch({ type: ALL_TAGS, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};
