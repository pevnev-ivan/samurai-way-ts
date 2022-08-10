// STATE PROFILE PAGE
import {UpdateNewPostText} from "../redux/state";

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

// GLOBAL STATE
export type GlobalStateType = {
    profilePage: ProfileDataType
    dialogsPage: DialogsPageType
}

// PROFILE PAGE
export type ProfilePageType = {
    newPostElement: string
    postData: Array<PostElementType>
    addPost: () => void
    changeNewElement: (newElement: string) => void
}

// PROFILE/MYposts PAGE
export type MyPostsType = {
    newPostElement: string
    postData: Array<PostElementType>
    addPost: () => void
    changeNewElement: (newElement: string) => void

}
// PROFILE//DIALOGS PAGE
export type DialogsPageType = {
    dialogsData: Array<dialogsArr>
    messagesData: Array<MessagesArr>
}

export type DialogDataType = {
    dialogsArr: Array<dialogsArr>
}

export type dialogsArr = {
    id: number
    name: string
}

export type MessageDataType = {
    messagesData: Array<MessagesArr>
}
export type MessagesArr = {
    id: number
    message: string
}





