import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostElementType} from "../../../types/types";

type MyPostsType = {
    onChangeHandler: (newElement: string) => void
    onKeyHandler: () => void
    addPost: () => void
    postData: Array<PostElementType>
    newPostElement: string
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.postData.map(el =>
        <Post message={el.message} likesCount={el.likesCount} watchCount={el.watchCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
        // if (newPostElement.current) {props.dispatch(addPostAction())}
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // const newElement = e.currentTarget.value
        // props.dispatch(updatePostAction(newElement))
        let newElement = e.currentTarget.value
        props.onChangeHandler(newElement)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.onKeyHandler()
        }
    }

    return (
        <div className={s.content}>
            <div> My posts
                <div>
                    <textarea onKeyDown={onKeyHandler} onChange={onChangeHandler} ref={newPostElement}
                              value={props.newPostElement}></textarea>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>)
}

export default MyPosts