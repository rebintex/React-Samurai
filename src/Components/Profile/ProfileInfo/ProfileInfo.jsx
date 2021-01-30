import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <h1>Heading 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOxhHuPQfVUeRuFdScBL2K5FiW6l2BkY6vw&usqp=CAU" />
            </p>
            <div className = {s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;