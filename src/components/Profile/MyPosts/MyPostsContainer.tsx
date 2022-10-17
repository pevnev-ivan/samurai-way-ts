import React from 'react';

import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../types/GlobalTypes";
import {StoreContext} from "../../../StoreContext"

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = () => {
    return (<StoreContext.Consumer>
        {(store) => {

            let state = store.getState()
           
            let addPost = () => {
                store.dispatch(addPostAction())
            }

            const onChangeHandler = (newElement: string) => {
                store.dispatch(updatePostAction(newElement))
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
        }}


    </StoreContext.Consumer>)
}

export default MyPostsContainer