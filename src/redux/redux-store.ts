import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

const reducers = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser
});

export const store = createStore(reducers);