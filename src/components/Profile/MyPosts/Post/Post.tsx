import React from 'react';
import s from "../../Profile.module.css";
import {PostType} from "../../../../types/types";



const Post = (props: PostType) => {
    return <div className={s.item}>

            <div className={s.postHeader}>
                <div className={s.post__test}>
                <img className={s.avatar}
                     src="https://i.pinimg.com/originals/57/5c/bc/575cbc223378eff049d151e30839f2af.jpg"
                     alt="avatar"/>
                <div className={s.post__headerText}>
                    <span className={s.profileName}>Pevnev Ivan</span> <br/>
                    <span className={s.post__time}>15h. ago</span>
                </div>
                </div>
            <div>
                <button className={s.post__option}>oprtions</button>
            </div>
        </div>

        <span className={s.post__text}>{props.message}</span>

        <div className={s.post__statistic}>
            <div className={s.post__likes}>
                <button className={s.post__button + ' ' + s.post__button_like}>♡</button>
                <span>{props.likesCount}</span>
            </div>
            <span>{props.watchCount}</span>
        </div>

    </div>


}

export default Post