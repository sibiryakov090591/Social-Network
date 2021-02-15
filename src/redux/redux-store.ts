import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import dialogsReducer from "./dialogs-reducer/dialogs-reducer";
import usersReducer from "./users-reducer/users-reducer";
import authReducer from "./auth/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer/app-reducer";

const rootReducer = combineReducers({
    initialize: appReducer,
    auth: authReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
