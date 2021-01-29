import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import usersReducer from "./users-reducer/users-reducer";
import authReducer from "./auth/auth-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
