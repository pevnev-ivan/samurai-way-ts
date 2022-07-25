import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
    <header className={s.header}>
        <img className={s.header__logo} src='/LogoHeader.png' alt='logo'/>
        <button className={s.header__button}> СОЦИАЛЬНАЯ СЕТЬ И .</button>
    </header>
    )
}

export default Header