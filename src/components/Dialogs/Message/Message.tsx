import React, {ChangeEvent} from 'react';
import {MessagesArr} from "../../../types/types";

export type MessageDataType = {
    sendMessage: () => void
    onChangeMessageText: (newMessage: string) => void
    messagesData: Array<MessagesArr>
    newMessageElement: string
}

const Message = (props: MessageDataType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        props.sendMessage()
    }

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.onChangeMessageText(newMessage)
    }
    
    let messageElements = props.messagesData.map((ObjFromMessageData, index) => {
        return (
            <div
                key={index}>
                {ObjFromMessageData.message}
            </div>
        )
    })

    return (<div>
            <div>{messageElements}</div>

            <textarea
                onChange={onChangeMessageText}
                ref={newMessageElement}
                value={props.newMessageElement}>
            </textarea>

            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}

export default Message;