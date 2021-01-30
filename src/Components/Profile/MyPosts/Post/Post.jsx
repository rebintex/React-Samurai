import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className = {s.bgcolor}>
                <img className = {s.picWidth} src="https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1"/>
                <div>Next Post</div>
                {props.news}
                <div>
                    <span className={s.like}>Likes: {props.likes}</span>
                </div>
            </div>
       </div>
    )
}

export default Post;