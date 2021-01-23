import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div className = {s.item}>
            <div>First Post</div>
            <div>Second Post</div>
    
            <div>
                <textarea></textarea>
                <button>Add Posts</button>
            </div>
            <div>
                <Post news="I am the First"/>
                <Post />
                <Post news="I am the Third"/>
                <Post />
                
            </div>


       </div>
    )
}

export default MyPosts;