import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import snippet from "./snippet/reducer";
import snippettag from "./snippettag/reducer";
import tag from "./tag/reducer";
import layout from "./layout/reducer";

export default combineReducers({
  appState,
  user,
  snippet,
  tag,
  snippettag,
  layout,
});
