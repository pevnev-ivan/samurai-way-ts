import React from 'react';
import {StoreContext} from "../../../StoreContext";
import Dialog from "./Dialog";

const DialogContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                return (
                    <Dialog state={state.dialogsPage}/>
                )
            }}


        </StoreContext.Consumer>
    );
};

export default DialogContainer;