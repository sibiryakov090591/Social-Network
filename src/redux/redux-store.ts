import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser/profile-reduser";
import dialogsReduser from "./gialogs-reduser/dialogs-reduser";

const rootReducer = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer);
