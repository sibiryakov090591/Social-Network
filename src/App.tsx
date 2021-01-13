import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {News} from "./components/navbar/news/news";
import {Music} from "./components/navbar/music/music";
import {Settings} from "./components/navbar/settings/settings";
import {GlobalStateType} from "./redux/redux-store";

type PropsType = {
    store: GlobalStateType
}

const App: React.FC<any> = (props) => {

    const state = props.store.getState();


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <Profile store={props.store}/>}
                    />
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}
                    />
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
