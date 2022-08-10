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
import state, {addPost, UpdateNewPostText} from "./redux/state";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/Profile'} render={() => <Profile postData={state.profilePage.postData} addPost={addPost} newPostElement={state.profilePage.newPostElement} changeNewElement={UpdateNewPostText} />} />
                    <Route path={'/Dialogs'} render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
