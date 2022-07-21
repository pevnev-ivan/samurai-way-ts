import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

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


const Dialogs = () => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <Dialog dialogsArr={dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message messagesData={messagesData}/>
            </div>
        </div>
    );
};

export default Dialogs;