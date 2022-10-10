import React from 'react';
import './Topics.css'

const Topics = ({topic}) => {
    const {name, total, logo} = topic;
    return (
        <div className='topic-details'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <p>{name}</p>
                <p>Quiz: {total}</p>
                <button className='btn btn-primary'>Start Practicing</button>
            </div>
        </div>
    );
};

export default Topics;