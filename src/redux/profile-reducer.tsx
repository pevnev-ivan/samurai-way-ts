import {actionTypes} from "../types/types";
import {PostElementType} from "../components/Profile/MyPosts/MyPosts";

export type ProfilePageType = {
    newPostElement: string
    postData: Array<PostElementType>
    dispatch: any
}

export const addPostAction = () => ({type: 'ADD-POST'} as const)
export const updatePostAction = (newElement: string) => ({type: 'UPDATE-POST', newElement: newElement} as const)

const profileReducer = (state: ProfilePageType, action: actionTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: 5, message: state.newPostElement, likesCount: 0, watchCount: 0}
            return {...state, postData: [newPost, ...state.postData], newPostElement: ''};
        }
        case "UPDATE-POST": {
            return {...state, newPostElement: action.newElement};
        }
        default:
            return state;
    }
}

export default profileReducer