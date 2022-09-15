import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {dialogsArr, MessagesArr} from "../../types/types";

export type DialogsPageType = {
    dispatch: any
    newMessageElement: string
    dialogsData: Array<dialogsArr>
    messagesData: Array<MessagesArr>
}

const Dialogs = (props: DialogsPageType) => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <Dialog dialogsData={props.dialogsData}/>
            </div>

            <div className={s.messages}>
                <Message
                    dispatch={props.dispatch}

                    newMessageElement={props.newMessageElement}
                    messagesData={props.messagesData}/>
            </div>
        </div>
    );
};

export default Dialogs;