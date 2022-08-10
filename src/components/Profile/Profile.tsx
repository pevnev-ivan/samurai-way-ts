import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../types/types";
import {UpdateNewPostText} from "../../redux/state";


const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostElement={props.newPostElement} postData={props.postData} addPost={props.addPost} changeNewElement={props.changeNewElement}/>

        </div>)
}

export default Profile