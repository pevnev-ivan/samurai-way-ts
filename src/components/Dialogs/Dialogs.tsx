import React from 'react';
import s from './Dialogs.module.css'
import {StoreType} from "../../types/GlobalTypes";
import MessageContainer from "./Message/MessageContainer";
import DialogContainer from "./Dialog/DialogContainer";

export type DialogsPageType = {
    store: StoreType
}

const Dialogs = () => {
    return (
        <div className={s.dialogs__container}>
            <div className={s.dialogs}>
                <DialogContainer/>
            </div>

            <div className={s.messages}>
                <MessageContainer/>
            </div>
        </div>
    );
};

export default Dialogs;