import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../index";


const Profile = (props: StateType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>

        </div>)
}

export default Profile