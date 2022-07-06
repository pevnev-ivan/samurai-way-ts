import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.Item + ' ' + s.Item_active}>
            <a>Profile</a>
        </div>
        <div className={s.Item}>
            <a>Messages</a>
        </div>
        <div className={s.Item}>
            <a>News</a>
        </div>
        <div className={s.Item}>
            <a>Music</a>
        </div>
        <div className={s.Item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar