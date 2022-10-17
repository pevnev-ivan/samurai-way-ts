import React from 'react';
import {sendMessageAction, updateMessageAction} from "../../../redux/dialogs-reducer";
import Message from "./Message";
import {StoreContext} from "../../../StoreContext"


// export type MessageDataType = {}

const MessageContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const sendMessage = () => {
                    store.dispatch(sendMessageAction())
                }

                const onChangeMessageText = (newMessage: string) => {
                    store.dispatch(updateMessageAction(newMessage))
                }

                return (<Message
                    sendMessage={sendMessage}
                    onChangeMessageText={onChangeMessageText}
                    messagesData={state.dialogsPage.messagesData}
                    newMessageElement={state.dialogsPage.newMessageElement}
                />)
            }}


        </StoreContext.Consumer>

    )
}

export default MessageContainer;