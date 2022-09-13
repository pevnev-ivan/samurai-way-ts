// STATE PROFILE PAGE

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
    dispatch: (action: actionType) => void
}

// PROFILE/MYposts PAGE
export type MyPostsType = {
    newPostElement: string
    postData: Array<PostElementType>
    dispatch: (action: actionType) => void


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

export type actionType = {
    type: 'ADD-POST' | 'UPDATE-POST',
    newElement?: string
}





