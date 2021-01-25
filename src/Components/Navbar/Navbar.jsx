import React from 'react';
import s from './Navbar.module.css' 


const Navbar = () => {
    return (
        <nav className="menu">
        <ul>
          <li className={s.item}><a href="/profile">Profile</a></li>
          <li className={s.item}><a href="/messages">Messages</a></li>
          <li className={s.item}><a href="/contacts">Contacts</a></li>
          <li className={s.item}><a href="/videos">Videos</a></li>
        </ul> 
       </nav>
    )
}

export default Navbar;
