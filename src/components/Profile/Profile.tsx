import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            Avatar
        </div>

        <div>
            Avatar description
        </div>

        <div >
            <MyPosts/>
        </div>
    </div>
}

export default Profile