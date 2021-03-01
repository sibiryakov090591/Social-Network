import {ActionType, AuthType} from "../my-types";
import {authAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "../redux-store";
import {stopSubmit} from "redux-form";

const initialState: AuthType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
};

type DataType = {
    id: null | string
    login: null | string
    email: null | string
}

const authReducer = (state = initialState, action: AuthActionsType): AuthType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data
            }

        case "LOGOUT_USER": {
            return {
                ...state,
                userId: null,
                login: null,
                email: null,
                isAuth: false
            }
        }

        case "SET_CAPTCHA": {
            return {
                ...state,
                captcha: action.captcha
            }
        }

        default:
            return state;
    }
}

// Actions object:
export const authActions = {
    setAuthUser: (data: DataType, isAuth: boolean) => ({
        type: "SET_USER_DATA",
        data: {
            userId: data.id,
            login: data.login,
            email: data.email,
            isAuth: isAuth
        }
    } as const),
    logoutUser: () => ({type: "LOGOUT_USER"} as const),
    captcha: (url: string | null) => ({type: "SET_CAPTCHA", captcha: url} as const)
};

// Initial Global Type for Auth reducer:
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : any;
export type AuthActionsType = ReturnType<PropertiesType<typeof authActions>>;

// Thunks type
type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionType>;

// Thunks creators:
export const setAuthTC = (): ThunkType => async (dispatch) => {
    const {data} = await authAPI.setAuth();
    if (data.resultCode === 0) {
        dispatch(authActions.setAuthUser(data.data, true));
        dispatch(authActions.captcha(null))
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    const {data} = await authAPI.login(email, password, rememberMe, captcha);

    const errorMessage = data.messages.length > 0 ? data.messages[0] : "some error";
    if (data.resultCode === 0) {
        dispatch(setAuthTC());
    }
    if (data.resultCode === 1) {
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
    if (data.resultCode === 10) {
        const {data} = await authAPI.getCaptcha();
        dispatch(authActions.captcha(data.url))
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
};
export const logout = (): ThunkType => async (dispatch) => {
    const {data} = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(authActions.setAuthUser({
            id: null,
            login: null,
            email: null
        }, false));
    }
};

export default authReducer;
