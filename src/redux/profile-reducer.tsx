import {actionTypes} from "../types/types";

export const ADD_POST = 'ADD-POST'
export const UPDATE_POST = 'UPDATE-POST'

export const addPostAction = () => ({type: ADD_POST} as const)
export const updatePostAction = (newElement: string) => (
    {type: UPDATE_POST, newElement: newElement} as const)

let initialState = {
    newPostElement: '',
    postData:
        [
            {id: 1, message: 'Hi, it is test message', likesCount: 12, watchCount: 125},
            {id: 2, message: 'Second message', likesCount: 1252, watchCount: 2512},
            {id: 3, message: 'Learning props', likesCount: 123, watchCount: 2312},
            {id: 4, message: 'Test', likesCount: 23, watchCount: 124}
        ]
}

const profileReducer = (state = initialState, action: actionTypes) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, message: state.newPostElement,
                likesCount: 0, watchCount: 0
            }
            state.newPostElement && state.postData.unshift(newPost)
            state.newPostElement = ''
            return state;
        }
        case UPDATE_POST: {
            state.newPostElement = action.newElement
            return state;
        }
        default:
            return state;
    }
}

export default profileReducer