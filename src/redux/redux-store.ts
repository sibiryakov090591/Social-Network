import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser/profile-reduser";
import dialogsReduser from "./dialogs-reduser/dialogs-reduser";
import usersReduser from "./users-reduser/users-reduser";

const rootReducer = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    users: usersReduser,
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer);
