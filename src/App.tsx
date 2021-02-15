import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderContainer from "./components/header/header-container";
import {Navbar} from "./components/navbar/navbar";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import ProfileContainer from "./components/profile/profile-container";
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';
import LoginContainer from "./components/Login/Login-container";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {GlobalStateType} from "./redux/redux-store";
import {ActionType} from "./redux/my-types";
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer/app-reducer';
import {Preloader} from "./components/preloader/preloader";

type PropsType = {
    initializeApp: () => void
    isInitialized: boolean
}

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) return <Preloader/>

        return (
            <BrowserRouter>
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="App-wrapper-content">
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        isInitialized: state.initialize.initialized
    };
};
const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalStateType, {}, ActionType>) => {
    return {
        initializeApp: () => dispatch(initializeApp())
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
