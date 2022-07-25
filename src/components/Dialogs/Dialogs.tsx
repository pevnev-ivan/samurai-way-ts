import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {StateType} from "../../index";




const Dialogs = (props: StateType) => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <Dialog dialogsArr={props.state.dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message messagesData={props.state.messagesData}/>
            </div>
        </div>
    );
};

export default Dialogs;