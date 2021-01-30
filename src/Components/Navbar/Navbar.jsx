import React from 'react';
import s from './Navbar.module.css'; 
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.menu}>
        <ul>
          <li className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
          <li className={s.item}><NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink></li>
          <li className={s.item}><NavLink to="/contacts" activeClassName={s.activeLink}>Contacts</NavLink></li>
          <li className={s.item}><NavLink to="/videos" activeClassName={s.activeLink}>Videos</NavLink></li>
        </ul> 
       </nav>
    )
}

export default Navbar;
