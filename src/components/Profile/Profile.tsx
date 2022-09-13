import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../types/types";


const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}

                newPostElement={props.newPostElement}
                postData={props.postData}
            />
        </div>)
}

export default Profile