import { combineReducers } from "redux";

import { shopReducer as shop } from "./shop-reducer";
import { userReducer as user } from "./user-reducer";

export default combineReducers({ shop, user });
