import React from "react";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/auth/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {ActionType} from "../../redux/my-types";
import {GlobalStateType} from "../../redux/redux-store";
import {Login} from "./Login";
import {connect} from "react-redux";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalStateType, {}, ActionType>) => {
    return {
        loginHandler: (email: string, password: string, rememberMe: boolean) => dispatch(loginThunkCreator(email, password, rememberMe)),
        logoutHandler: () => dispatch(logoutThunkCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);