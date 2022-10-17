import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../types/GlobalTypes";

type ProfileType = {
    store: StoreType
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>)
}

export default Profile