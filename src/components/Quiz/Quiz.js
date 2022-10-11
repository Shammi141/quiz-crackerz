import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const { question, correctAnswer, options } = quiz;
    const no =0;
    return (
        <div className='quest m-5 p-3'>
            <h6>Quiz-{no+1} {question}</h6>
            
            <div className='options'>
                <div>{options[0]}</div>
                <div>{options[1]}</div>
                <div>{options[2]}</div>
                <div>{options[3]}</div>
            </div>
        </div>
    );
};

export default Quiz;