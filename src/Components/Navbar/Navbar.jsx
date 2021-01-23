import React from 'react';
import s from './Navbar.module.css' 


const Navbar = () => {
    return (
        <nav className="menu">
        <ul>
          <li className={s.item}><a href="#">Profile</a></li>
          <li className={s.item}><a href="#">Messages</a></li>
          <li className={s.item}><a href="#">Contacts</a></li>
          <li className={s.item}><a href="#">Videos</a></li>
        </ul> 
       </nav>
    )
}

export default Navbar;
