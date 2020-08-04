import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
    appLoading,
    appDoneLoading,
    showMessageWithTimeout,
    setMessage
  } from "../appState/actions";

  
  export const NEW_SNIPPET_SUCCESS = "NEW_SNIPPET_SUCCESS";

  const newSnippetSuccess = Post => {
    return {
      type: NEW_SNIPPET_SUCCESS,
      payload: Post
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