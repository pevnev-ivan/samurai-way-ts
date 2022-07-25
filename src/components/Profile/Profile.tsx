import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";


const Profile = (props: PostDataType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>

        </div>)
}

export default Profile