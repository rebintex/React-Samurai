import React from 'react';
import s from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const DialItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogues = (props) => {

   

    let dialoguesElements = props.dialogues
        .map(d => <DialItem name={d.name} id={d.id} />);

    let messageElements = props.messages
        .map(m => <Message message={m.message} />);


    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogues;