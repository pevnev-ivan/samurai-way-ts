import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {StoreType} from "../../types/GlobalTypes";
import MessageContainer from "./Message/MessageContainer";

export type DialogsPageType = {
    store: StoreType
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <Dialog store={props.store}/>
            </div>

            <div className={s.messages}>
                <MessageContainer store={props.store}/>
            </div>
        </div>
    );
};

export default Dialogs;