import React from 'react';
import {Header} from "./header";
import {connect} from 'react-redux';
import {GlobalStateType} from "../../redux/redux-store";
import {logoutThunkCreator} from "../../redux/auth/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {ActionType} from "../../redux/my-types";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<PropsType, {}> {

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state: GlobalStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalStateType, {}, ActionType>) => {
    return {
        logout: () => dispatch(logoutThunkCreator())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

