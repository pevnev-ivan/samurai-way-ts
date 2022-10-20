import React from 'react';
import {sendMessageAction, updateMessageAction} from "../../../redux/dialogs-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {GlobalStateType} from "../../../types/GlobalTypes";


let mapStateToProps = (state: GlobalStateType) => {
    return {
        newMessageElement: state.dialogsPage.newMessageElement,
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAction())
        },
        onChangeMessageText: (newMessage: string) => {
            dispatch(updateMessageAction(newMessage))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer;