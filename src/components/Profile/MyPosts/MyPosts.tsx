import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsType} from "../../../types/types";
import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";


const Profile = (props: MyPostsType) => {
    let postElements = props.postData.map(el =>
        <Post
            message={el.message}
            likesCount={el.likesCount}
            watchCount={el.watchCount}
        />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {

        if (newPostElement.current) {
            props.dispatch(addPostAction())
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newElement = e.currentTarget.value
        props.dispatch(updatePostAction(newElement))
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
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

export default Profile