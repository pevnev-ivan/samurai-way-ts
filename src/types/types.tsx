// STATE PROFILE PAGE


import {DialogsPageType} from "../components/Dialogs/Dialogs";
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
export type StoreType = {
    _state: GlobalStateType
    addPost: () => void
    _callSubscriber: any
    UpdateNewPostText: (newElement: string) => void
    subscribe: any
    getState: () => GlobalStateType
}
// GLOBAL STATE
export type GlobalStateType = {
    profilePage: ProfileDataType
    dialogsPage: DialogsPageType
}

// PROFILE PAGE
export type ProfilePageType = {
    newPostElement: string
    postData: Array<PostElementType>
    dispatch: any
}

// PROFILE/MYposts PAGE
export type MyPostsType = {
    newPostElement: string
    postData: Array<PostElementType>
    dispatch: any
}
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







