import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderContainer from "./components/header/header-container";
import {Navbar} from "./components/navbar/navbar";
import {News} from "./components/news/news";
import {Music} from "./components/music/music";
import {Settings} from "./components/settings/settings";
import ProfileContainer from "./components/profile/profile-container";
import {DialogsContainer} from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="App-wrapper-content">
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

export default App;
