import React from 'react';
import s from './Videos.module.css'; 


const Videos = () => {
    return (
        <div>
            <h2>
                Some videos
            </h2>
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/5X5ZLWdAnt4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <hr/>
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/L2PSRa2JM9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
       </div>
    )
}

export default Videos;