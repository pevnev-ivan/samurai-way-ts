import React from 'react';

type MessagesDataType = {
    messagesData: Array<MessageType>
}

type MessageType = {
    id: number
    message: string
}

const Message = (props: MessagesDataType) => {

    let messageElements = props.messagesData.map((ObjFromMessageData,index) => {
        return (
            <div key={index}>
                {ObjFromMessageData.message}
            </div>
        )
    })

    return (
        <div>
            {messageElements}
        </div>
    )}

export default Message;