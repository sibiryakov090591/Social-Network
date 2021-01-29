import React from 'react';
import {Header} from "./header";
import {connect} from 'react-redux';
import {GlobalStateType} from "../../redux/redux-store";
import {setAuthThunkCreator} from "../../redux/auth/auth-reducer";
import {Dispatch} from 'redux';

type PropsType = {
    isAuth: boolean
    login: string | null
    setAuthUser: () => void
}

class HeaderContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.setAuthUser()
    }

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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuthUser: () => dispatch(setAuthThunkCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

