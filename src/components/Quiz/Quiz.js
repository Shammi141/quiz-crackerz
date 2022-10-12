import React from 'react';
import './Quiz.css'
import { ToastContainer, toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    const { question, correctAnswer, options } = quiz;
    const handelOption = (ans) =>{
        const correctAns = correctAnswer;
        const givenAns = ans;
        console.log(correctAns)
        console.log(givenAns)
        if(givenAns === correctAns){
            console.log('yes')
            toast('Correct Answer');
        }
        else{
            toast('Wrong Answer');
        }

    }

    return (
        <div className='quest m-5 p-3'>
            <h6> {question}</h6>

            <div className='options'>
                <div onClick={() => handelOption(options[0])}>{options[0]}</div>
                <div onClick={() => handelOption(options[1])}>{options[1]}</div>
                <div onClick={() => handelOption(options[2])}>{options[2]}</div>
                <div onClick={() => handelOption(options[3])}>{options[3]}</div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;