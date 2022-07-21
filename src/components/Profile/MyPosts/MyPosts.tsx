import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'Hi, it is test message', likesCount: 12, watchCount: 125},
    {id: 2, message: 'Second message', likesCount: 1252, watchCount: 2512},
    {id: 3, message: 'Learning props', likesCount: 123, watchCount: 2312},
    {id: 4, message: 'Test', likesCount: 23, watchCount: 124}
]

let postElements = postData.map (el => <Post message={el.message} likesCount={el.likesCount} watchCount={el.watchCount}/>)

const Profile = () => {
    return <div className={s.content}>

        <div> My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        {postElements}
    </div>
}

export default Profile