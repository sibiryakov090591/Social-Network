import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Navbar} from "./components/UI-kit/navbar/navbar";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import ProfileContainer from "./components/profile/profile-container";
import DialogsContainer from './components/dialogs/dialogs-container';
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "./redux/redux-store";
import {initializeApp} from './redux/app-reducer/app-reducer';
import {Preloader} from "./components/UI-kit/preloader/preloader";
import {Header} from './components/header/header';
import {Login} from "./components/Login/Login";
import {Users} from "./components/users/users";

const App: React.FC = () => {

    // Hooks
    const isInitialized = useSelector((state: GlobalStateType) => state.initialize.initialized);
    const dispatch = useDispatch();


    // Lifecycle
    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])


    // Show preloader before initialized
    if (!isInitialized) return <Preloader/>


    // Render
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
