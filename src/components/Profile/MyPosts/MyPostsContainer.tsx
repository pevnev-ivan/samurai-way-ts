import React from 'react';

import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../types/GlobalTypes";

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAction())
    }

    const onChangeHandler = (newElement: string) => {
        props.store.dispatch(updatePostAction(newElement))
    }

    const onKeyHandler = () => {

        addPost()
    }

    return (<MyPosts
            onChangeHandler={onChangeHandler}
            onKeyHandler={onKeyHandler}
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostElement={state.profilePage.newPostElement}
        />

    )
}

export default MyPostsContainer