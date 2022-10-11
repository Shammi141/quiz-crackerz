import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = ({topic}) => {
    const {id, name, total, logo} = topic;
    return (
        <div className='topic-details'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <p>{name}</p>
                <p>Quiz: {total}</p>
                {/* <button className='btn btn-primary'>Start Practicing</button> */}
                <p><Link className='link' to={`/topics/${id}`}>Start Quiz</Link></p>

            </div>
        </div>
    );
};

export default Topics;