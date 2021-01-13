import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

const rootReducer = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer);
