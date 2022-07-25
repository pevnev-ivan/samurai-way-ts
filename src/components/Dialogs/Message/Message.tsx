import React from 'react';
import {MessagesDataType} from "../../../index";


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