import { combineReducers } from "redux";
import islogged from "./islogged";
import isdarkmode from './isdarkmode';
// import FetchUsers from "./fetch";

const rootreducers = combineReducers({
  log: islogged,
  darkmode:isdarkmode,
  // users:FetchUsers

});

export default rootreducers;
