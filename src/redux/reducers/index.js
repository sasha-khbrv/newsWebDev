import { combineReducers } from "redux";
import { news } from "./news";
import { errors } from "./errors";
import { loaders } from "./loaders";

const reducer = combineReducers({ news, errors, loaders });

export default reducer;
