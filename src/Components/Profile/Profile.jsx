import React from 'react';
import s from './Profile.module.css'; 
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <h1>Heading 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
         <p><img className = {s.duoling} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOxhHuPQfVUeRuFdScBL2K5FiW6l2BkY6vw&usqp=CAU"/></p>
       <MyPosts />
       </div>
    )
}

export default Profile;