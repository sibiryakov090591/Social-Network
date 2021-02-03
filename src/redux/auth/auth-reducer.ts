import {ActionType, AuthType} from "../my-types";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action: ActionType): AuthType => {

    switch (action.type) {
        case "SET_USER_DATA":
            if (action.data) {
                return {
                    ...state,
                    ...action.data
                }
            } else return state;

        default:
            return state;
    }
}

// Actions object:
export const authActions = {
    setAuthUser: (data: AuthType) => ({
        type: "SET_USER_DATA",
        data: {
            id: data.id,
            login: data.login,
            email: data.email,
            isAuth: true
        }
    } as const)
};

// Initial Global Type for Auth reducer:
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : any;
export type AuthActionsType = ReturnType<PropertiesType<typeof authActions>>;



// Thunks creators:
export const setAuthThunkCreator = (): any => (dispatch: Dispatch) => {
    profileAPI.setAuth()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(authActions.setAuthUser(data.data));
            }
        });
}

export default authReducer;
