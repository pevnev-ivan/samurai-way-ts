import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const Profile = () => {
    return <div className={s.content}>

        <div> My posts
            <div>
                New post
            </div>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>
}

export default Profile