import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import snippet from "./snippet/reducer";

export default combineReducers({
  appState,
  user,
  snippet,
});
