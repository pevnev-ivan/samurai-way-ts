import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/redux'

export type PostDataType = {
    postData: Array<PostElementType>
}

export type PostElementType = {
    id: number
    message: string
    likesCount: number
    watchCount: number
}

export type PostType = {
    message: string;
    likesCount: number;
    watchCount: number;
}

//Messages

export type MessagesDataType = {
    messagesData: Array<MessageType>
}

export type MessageType = {
    id: number
    message: string
}

//Dialogs

export type DialogsDataType = {
    dialogsArr: Array<DialogItemType>
}

export type DialogItemType = {
    id: number
    name: string
}

//State
export type StateType = {
    state: any
}


ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);