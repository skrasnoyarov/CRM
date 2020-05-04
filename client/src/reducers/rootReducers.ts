import {AuthReducer} from './Auth';
import {combineReducers} from "redux";
import {PagesReducer} from "./pages";

export default combineReducers({
    AuthReducer,
    PagesReducer
});
