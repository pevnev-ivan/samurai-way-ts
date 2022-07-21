import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div></div>
        <div>
            Avatar
        </div>
        <div> Avatar description
        </div>
        <MyPosts/>
    </div>
}

export default Profile