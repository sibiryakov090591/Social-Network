import {ActionType, AuthType} from "../my-types";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

export const SET_USER_DATA = "SET_USER_DATA";


const authReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SET_USER_DATA:
            if (action.data) {
                return {
                    ...state,
                    ...action.data
                }
            } else return state

        default:
            return state;
    }
}

export const setAuthUser = (data: AuthType): ActionType => ({
    type: "SET_USER_DATA",
    data: {
        id: data.id,
        login: data.login,
        email: data.email,
        isAuth: true
    }
});

export const setAuthThunkCreator = (): any => (dispatch: Dispatch) => {
    profileAPI.setAuth()
        .then(({data}) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUser(data.data));
            }
        });
}

export default authReducer;
