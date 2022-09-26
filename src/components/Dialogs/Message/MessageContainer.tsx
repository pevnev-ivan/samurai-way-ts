import React from 'react';
import {sendMessageAction, updateMessageAction} from "../../../redux/dialogs-reducer";
import Message from "./Message";

// export type MessageDataType = {}

const MessageContainer = (props: any) => {

    let state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(sendMessageAction())
    }

    const onChangeMessageText = (newMessage: string) => {
        props.store.dispatch(updateMessageAction(newMessage))
    }

    return (
        <Message
            sendMessage={sendMessage}
            onChangeMessageText={onChangeMessageText}
            messagesData={state.dialogsPage.messagesData}
            newMessageElement={state.dialogsPage.newMessageElement}
        />
    )
}

export default MessageContainer;