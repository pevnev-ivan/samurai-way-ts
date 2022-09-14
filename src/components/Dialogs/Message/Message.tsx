import React, {ChangeEvent} from 'react';
import {MessagesArr} from "../../../types/types";
import {sendMessageAction, updateMessageAction} from "../../../redux/state";

export type MessageDataType = {
    dispatch: any

    newMessageElement: string
    messagesData: Array<MessagesArr>
}

const Message = (props: MessageDataType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        props.dispatch(sendMessageAction())

    }

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        newMessage && props.dispatch(updateMessageAction(newMessage))
    }

    let messageElements = props.messagesData.map((ObjFromMessageData, index) => {
        return (
            <div key={index}>
                {ObjFromMessageData.message}
            </div>
        )
    })

    return (<div>
            <div>
                {messageElements}
            </div>

            <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.newMessageElement}></textarea>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}

export default Message;