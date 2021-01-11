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
import {ActionType, StateType} from "./redux/state";

type PropsType = {
    state: StateType
    addPostsAndMessagesFunc: (action: ActionType) => void
};

const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <Profile profileData={props.state.profile}
                                                                  addMyPost={props.addPostsAndMessagesFunc}
                                                                  onChangeMyPost={props.addPostsAndMessagesFunc}
                        />}
                    />
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogs}
                                                                  addMessage={props.addPostsAndMessagesFunc}
                                                                  onChangeMyMessage={props.addPostsAndMessagesFunc}
                        />}
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
