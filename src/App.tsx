import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {actionType, GlobalStateType} from "./types/types";

type PropsType = {
    state: GlobalStateType
    dispatch: (action: actionType) => void
}

function App(props: PropsType) {
    return (
        <>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>

                    <div className={'app-wrapper-content'}>
                        <Route path={'/Profile'} render={() =>
                            <Profile
                                dispatch={props.dispatch}

                                postData={props.state.profilePage.postData}
                                newPostElement={props.state.profilePage.newPostElement}

                            />}/>
                        <Route path={'/Dialogs'} render={() =>
                            <Dialogs
                                dialogsData={props.state.dialogsPage.dialogsData}
                                messagesData={props.state.dialogsPage.messagesData}
                            />}/>
                        <Route path={'/News'} render={() => <News/>}/>
                        <Route path={'/Music'} render={() => <Music/>}/>
                        <Route path={'/Settings'} render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
