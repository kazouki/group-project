import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import Api from "../../Api";

export const NEW_SNIPPET_SUCCESS = "NEW_SNIPPET_SUCCESS";
export const ALL_SNIPPETS = "ALL_SNIPPETS";

const newSnippetSuccess = (Post) => {
  return {
    type: NEW_SNIPPET_SUCCESS,
    payload: Post,
  };
};

export const newSnippet = (title, snippet) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/snippets`, {
        title,
        snippet,
      });

      dispatch(newSnippetSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "Post created!"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const fetchSnippets = () => {
  return async (dispatch, getState) => {
    try {
      const res = await Api("snippets", { method: "GET" });
      dispatch({ type: ALL_SNIPPETS, payload: res.data });
    } catch (e) {
      console.log(e);
    }
  };
};
