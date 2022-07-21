import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.Item}>
            <NavLink to = {"/profile"} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to = {"/Dialogs"} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to = {"/News"} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to = {"/Music"} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to = {"/Settings"} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar