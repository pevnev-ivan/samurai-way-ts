import {actionTypes} from "../types/types";

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const updateMessageAction = (newMessage: string) => (
    {type: UPDATE_MESSAGE, newMessageElement: newMessage} as const)
export const sendMessageAction = () => ({type: SEND_MESSAGE} as const)

let initialState = {
    newMessageElement: '',
    dialogsData:
        [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Mate'},
            {id: 5, name: 'Jax'},
            {id: 6, name: 'Fisk'},
            {id: 7, name: 'Lana'},
            {id: 8, name: 'Dru'},
        ],
    messagesData:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Goodbye'},
            {id: 3, message: 'Sup'},
            {id: 4, message: 'Test'}
        ]
}

const dialogsReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 5, message: state.newMessageElement}
            state.messagesData.unshift(newMessage)
            state.newMessageElement = ''
            return state;
        }
        case UPDATE_MESSAGE: {
            state.newMessageElement = action.newMessageElement
            return state;
        }
        default:
            return state;
    }
}

export default dialogsReducer