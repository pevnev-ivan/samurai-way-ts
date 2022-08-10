import React from 'react';
import {MessageDataType} from "../../../types/types";


const Message = (props: MessageDataType) => {

    let messageElements = props.messagesData.map((ObjFromMessageData, index) => {
        return (
            <div key={index}>
                {ObjFromMessageData.message}
            </div>
        )
    })

    return ( <div>
        <div>
            {messageElements}
        </div>

            <textarea></textarea>
            <button>Отправить</button>
    </div>
)
}

export default Message;