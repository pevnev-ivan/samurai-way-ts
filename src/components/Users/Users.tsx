import React from 'react';
import styles from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    return (
        <div className={styles.usersContainer}>
            {props.users.users.map(el => <div className={styles.userContainer} key={el.id}>

                <div className={styles.userLeftSide}>
                    <img src={el.avatarUrl} alt="Avatar Pic" className={styles.userAvatar}/>
                    <button onClick={() => props.followToggle(el.id)} className={el.followed ? styles.followButton
                        : styles.followButton + ' ' + styles.unfollowButton}>{el.followed ? 'Follow' : 'Unfollow'}</button>
                </div>

                <div className={styles.userRightSide}>

                    <div className={styles.userInfo}>
                        <div><span>{el.fullName}</span></div>
                        <div style={{textAlign: 'end'}}>
                            <span>{el.location.city},</span>
                            <br/>
                            <span>{el.location.country}</span>
                        </div>
                    </div>

                    <div style={{alignSelf: 'start'}}>
                        <span>{el.status}</span>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Users;