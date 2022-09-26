import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../types/GlobalTypes";

type ProfileType = {
    store: StoreType
}

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>)
}

export default Profile