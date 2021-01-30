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
   
    let DialogData = [
        {id: 0, name: "Andrey"},
        {id: 1, name: "Bakhadir"},
        {id: 2, name: "Vladilen"},
        {id: 3, name: "Aleksey"},
        {id: 4, name: "Sergey"},
    ]

    let messageData = [
        {id: 0, message: "Hi man,"},
        {id: 1, message: "Hello bro,"},
        {id: 2, message: "How are you"},
        {id: 3, message: "How do you do?"},
        {id: 4, message: "Good day"},
    ]



    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialItem name = {DialogData[0].name} id = {DialogData[0].id}/>
                <DialItem name = {DialogData[1].name}  id = {DialogData[1].id}/>
                {/* <DialItem name = "Vladilen" id = "2"/>
                <DialItem name = "Aleksey" id = "3"/>
                <DialItem name = "Sergey" id = "4"/> */}
            </div>
            <div className={s.messages}>
                <Message message = {messageData[0].message} />
                <Message message = {messageData[1].message} />
                {/* <Message message = "How are you" />
                <Message message = "How do you do?" />
                <Message message = "Good day" /> */}
            </div>
        </div>
    )
}

export default Dialogues;