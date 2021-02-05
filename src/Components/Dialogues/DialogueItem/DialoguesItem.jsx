import React from 'react';
import s from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const DialItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialoguesItem;