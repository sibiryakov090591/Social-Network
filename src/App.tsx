import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Redirect, Route} from 'react-router-dom';
import {Navbar} from "./components/UI-kit/navbar/navbar";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "./redux/redux-store";
import {initializeApp} from './redux/app-reducer/app-reducer';
import {Preloader} from "./components/UI-kit/preloader/preloader";
import {Header} from './components/header/header';
import {withSuspense} from "./utils/hoc/withSuspense";
import ProfileContainer from "./components/profile/profile-container";

// Lazy loading
const Dialogs = React.lazy((): any => import('./components/dialogs/dialogs'));
const Users = React.lazy((): any => import('./components/users/users'));
const Login = React.lazy((): any => import('./components/Login/Login'));


const App: React.FC = () => {

    // Hooks
    const isInitialized = useSelector((state: GlobalStateType) => state.initialize.initialized);
    const isAuth = useSelector((state: GlobalStateType) => state.auth.isAuth);
    const dispatch = useDispatch();


    // Lifecycle
    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])


    // Show preloader before initialized
    if (!isInitialized) return <Preloader/>


    // if (isAuth) return <HashRouter><Redirect to={"/profile"} /></HashRouter>

    // Render
    return (
        <HashRouter>
            <Redirect to={"/profile"} />
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/login' render={withSuspense(Login)}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={withSuspense(Dialogs)}/>
                    <Route path='/users' render={withSuspense(Users)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
