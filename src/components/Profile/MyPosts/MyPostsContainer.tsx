import React from 'react';

import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";
import {GlobalStateType, StoreType} from "../../../types/GlobalTypes";
import {connect} from "react-redux";
import Dialog from "../../Dialogs/Dialog/Dialog";
import {actionTypes} from "../../../types/types";

type MyPostsContainerType = {
    store: StoreType
}

let mapStateToProps = (state: GlobalStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostElement: state.profilePage.newPostElement
    }
}

let mapDispatchToProps = (dispatch: (action: actionTypes) => void) => {
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default MyPostsContainer