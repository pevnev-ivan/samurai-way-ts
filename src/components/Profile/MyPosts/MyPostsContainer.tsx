import React from 'react';

import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts, {PostElementType} from "./MyPosts";
import {Dispatch} from "redux";
import {GlobalStateType} from "../../../types/GlobalTypes";

type mapStatePropsType = {
    newPostElement: string
    postData: Array<PostElementType>
}

type mapDispatchToPropsType = {
    addPost: () => void
    onKeyHandler: () => void
    onChangeHandler: (newElement: string) => void
}

let mapStateToProps = (state: GlobalStateType): mapStatePropsType => {
    return {
        postData: state.profilePage.postData,
        newPostElement: state.profilePage.newPostElement
    }
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAction())
        },
        onKeyHandler: () => {
            dispatch(addPostAction())
        },
        onChangeHandler: (newElement: string) => {
            dispatch(updatePostAction(newElement))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
