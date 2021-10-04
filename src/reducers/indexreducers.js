import { combineReducers } from "redux";
import islogged from "./islogged";
import isdarkmode from './isdarkmode'

const rootreducers = combineReducers({
  log: islogged,
  darkmode:isdarkmode

});

export default rootreducers;
