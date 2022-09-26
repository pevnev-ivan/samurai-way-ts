// STATE PROFILE PAGE


import {addPostAction, updatePostAction} from "../redux/profile-reducer";
import {sendMessageAction, updateMessageAction} from "../redux/dialogs-reducer";

export type PostElementType = {
    id: number
    message: string
    likesCount: number
    watchCount: number
}

export type PostType = {
    message: string;
    likesCount: number;
    watchCount: number;
}

export type ProfileDataType = {
    newPostElement: string
    postData: Array<PostElementType>
}

// STORE STATE

// GLOBAL STATE


// PROFILE PAGE
export type ProfilePageType = {
    newPostElement: string
    postData: Array<PostElementType>
    dispatch: any
}

// PROFILE/MYposts PAGE

// PROFILE//DIALOGS PAGE


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


export type actionTypes =
    ReturnType<typeof addPostAction>
    | ReturnType<typeof updatePostAction>
    | ReturnType<typeof sendMessageAction>
    | ReturnType<typeof updateMessageAction>







