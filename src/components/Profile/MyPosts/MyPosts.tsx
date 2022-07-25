import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

import {PostDataType} from "../../../index";



const Profile = (props: PostDataType) => {
    let postElements = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}
                                                      watchCount={el.watchCount}/>)

    return (
        <div className={s.content}>
            <div> My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            {postElements}
        </div>)
}

export default Profile