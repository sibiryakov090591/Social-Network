import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { News } from "./components/navbar/news/news";
import { Music } from "./components/navbar/music/music";
import { Settings } from "./components/navbar/settings/settings";
import { ProfileContainer } from "./components/profile/profile-container";
import { DialogsContainer } from './components/dialogs/dialogs-container';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
