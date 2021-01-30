import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    let postData = [
        {id: 0, news: "I am the First", likes: '1'},
        {id: 1, news: "I am the Second", likes: '21'}
        
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add Posts</button></div>
            </div>
            <div className = {s.posts}>
                <Post news={postData[0].news} likes = {postData[0].likes}/>
                <Post news={postData[1].news} likes = {postData[1].likes} />
                
            </div>


        </div>
    )
}

export default MyPosts;