import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import Api from "../../Api";

import { fetchSnippetTags } from "../snippettag/actions";

export const NEW_SNIPPET_SUCCESS = "NEW_SNIPPET_SUCCESS";
export const ALL_SNIPPETS = "ALL_SNIPPETS";
export const UPDATE_SNIPPETS = "UPDATE_SNIPPETS";
export const DELETE_SNIPPETS = "DELETE_SNIPPETS";

const newSnippetSuccess = (Post) => {
  return {
    type: NEW_SNIPPET_SUCCESS,
    payload: Post,
  };
};

const deleteSnippetSuccess = (snippet) => {
  return {
    type: DELETE_SNIPPETS,
    payload: snippet,
  };
};

export const newSnippet = (title, snippet, tag) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const token = selectToken(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/snippets`,
        {
          title,
          snippet,
          tag,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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

      if (res) dispatch(fetchSnippetTags());
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateSnippet = (snippetState) => {
  return async (dispatch, getState) => {
    try {
      const res = await Api("snippets", {
        method: "PUT",
        data: { ...snippetState },
      });

      if (res) dispatch(fetchSnippets());

      return res;
    } catch (e) {
      console.log(e);
    }
    return null;
  };
};

export const deleteSnippet = (id) => {
  return async (dispatch, getState) => {
    const { snippetId } = id;

    const token = selectToken(getState());
    try {
      const response = await axios.delete(`${apiUrl}/snippets/${snippetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(deleteSnippetSuccess(response.data.snippets));
    } catch (e) {
      console.log(e);
    }
  };
};
