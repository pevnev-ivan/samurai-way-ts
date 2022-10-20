import {actionTypes} from "../types/types";

export type DialogDataType = {
    newMessageElement: string
    dialogsData: Array<dialogsArr>
    messagesData: Array<MessagesArr>
}

export type dialogsArr = {
    id: number
    name: string
}

export type MessagesArr = {
    id: number
    message: string
}


export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const updateMessageAction = (newMessage: string) => ({
    type: UPDATE_MESSAGE,
    newMessageElement: newMessage
} as const)
export const sendMessageAction = () => ({type: SEND_MESSAGE} as const)

const dialogsReducer = (state: DialogDataType, action: actionTypes): DialogDataType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 5, message: state.newMessageElement}
            return {...state, messagesData: [newMessage, ...state.messagesData], newMessageElement: ''};
        }
        case UPDATE_MESSAGE: {
            return {...state, newMessageElement: action.newMessageElement};
        }
        default:
            return state;
    }
}

export default dialogsReducer