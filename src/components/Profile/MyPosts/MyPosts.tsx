import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export type PostElementType = {
    id: number
    message: string
    likesCount: number
    watchCount: number
}
 
const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.postData.map((el, index) =>
        <Post key={index} message={el.message} likesCount={el.likesCount} watchCount={el.watchCount}/>)
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