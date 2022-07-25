import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";




const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <Dialog dialogsArr={props.dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message messagesData={props.messagesData}/>
            </div>
        </div>
    );
};

export default Dialogs;