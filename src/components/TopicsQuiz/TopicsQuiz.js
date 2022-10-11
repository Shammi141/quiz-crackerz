import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './TopicsQuiz.css'

const TopicsQuiz = () => {
    const quizss = useLoaderData();
    const quizs = quizss.data.questions;
    console.log(quizs);

    return (
        <div>
            <h2 className='m-3 fw-bold'>Quiz Topics Name: {quizss.data.name}</h2>
            {
                quizs.map(quiz => <Quiz
                key={quiz.id}
                quiz = {quiz}
                ></Quiz>)
            }

        </div>
    );
};

export default TopicsQuiz;