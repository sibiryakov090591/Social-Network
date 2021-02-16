import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "../redux-store";
import {ActionType} from "../my-types";
import {setAuthThunkCreator} from "../auth/auth-reducer";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppActionsType) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

const appActions = {
    initializedSuccess: () => ({type: "INITIALIZED_SUCCESS"} as const)
}

// Actions type
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : any;
export type AppActionsType = ReturnType<PropertiesType<typeof appActions>>;

// Thunks type
type ThunkType = ThunkAction<void, GlobalStateType, unknown, ActionType>;

export const initializeApp = (): ThunkType => (dispatch) => {
    dispatch(setAuthThunkCreator())
        .then(() => {
            dispatch(appActions.initializedSuccess());
        })
}