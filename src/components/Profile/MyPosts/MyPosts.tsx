import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const Profile = () => {
    return <div className={s.content}>

        <div> My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <Post message = {'Hi, it is test message'} likesCount={12} watchCount={132}/>
        <Post message = {'Second message'} likesCount={22} watchCount={132}/>
        <Post message = {'Learning props'} likesCount={32} watchCount={132}/>
    </div>
}

export default Profile