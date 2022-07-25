import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Mate'},
    {id: 5, name: 'Jax'},
    {id: 6, name: 'Fisk'},
    {id: 7, name: 'Lana'},
    {id: 8, name: 'Dru'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Goodbye'},
    {id: 3, message: 'Sup'},
    {id: 4, message: 'Test'}
]

let postData = [
    {id: 1, message: 'Hi, it is test message', likesCount: 12, watchCount: 125},
    {id: 2, message: 'Second message', likesCount: 1252, watchCount: 2512},
    {id: 3, message: 'Learning props', likesCount: 123, watchCount: 2312},
    {id: 4, message: 'Test', likesCount: 23, watchCount: 124}
]

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


ReactDOM.render(
    <App dialogsData= {dialogsData}
         messagesData={messagesData}
         postData={postData}/>,
  document.getElementById('root')
);