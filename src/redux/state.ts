import {actionTypes} from "../types/types";

export const ADD_POST = 'ADD-POST'
export const UPDATE_POST = 'UPDATE-POST'

export const addPostAction = () => ({type: ADD_POST} as const)
export const updatePostAction = (newElement: string) => (
    {type: UPDATE_POST, newElement: newElement} as const)

export let store: any = {
    _state: {
        profilePage:
            {
                newPostElement: '',
                postData:
                    [
                        {id: 1, message: 'Hi, it is test message', likesCount: 12, watchCount: 125},
                        {id: 2, message: 'Second message', likesCount: 1252, watchCount: 2512},
                        {id: 3, message: 'Learning props', likesCount: 123, watchCount: 2312},
                        {id: 4, message: 'Test', likesCount: 23, watchCount: 124}
                    ]
            },

        dialogsPage:
            {
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
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostElement,
            likesCount: 0,
            watchCount: 0
        }
        if (this._state.profilePage.newPostElement) {
            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.newPostElement = ''
            this._callSubscriber(this._state)
        } else {
        }
    },
    _callSubscriber(_state: any) {
    },
    _UpdateNewPostText(newElement: string) {
        this._state.profilePage.newPostElement = newElement
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer // observer pattern (similar to publisher-subscriber)
    },
    getState() {
        return this._state
    },

    dispatch(action: actionTypes) { // action: {type : 'SOME ACTION', ?: 'SOME DATA'}
        console.log(action.type)
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_POST && action.newElement) {
            this._UpdateNewPostText(action.newElement)
        }
    }
}


export default store
