import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cover from '../Cover/Cover';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();

    return (
        
        <div className='home-container'>
            <Cover></Cover>
            <div className="topic-container">
                {
                    topics.data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>
                    )
                }
            </div>
        </div>
        
    );
};

export default Home;