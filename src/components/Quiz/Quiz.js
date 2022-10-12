import React from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    const { question, correctAnswer, options } = quiz;
    const handelOption = (ans) =>{
        const correctAns = correctAnswer;
        const givenAns = ans;
        if(givenAns === correctAns){

             toast ('Correct Answer');
          
        }
        else if (givenAns !== correctAns){
             toast('Wrong Answer');
          
        }
    }

    const showAns = () => {
        const correctAns = correctAnswer;
        toast(correctAns);
    }

    return (
        <div className='m-5 p-3'>
            <h6 className='qst'> {question}
                <EyeIcon onClick={showAns} className="h-6 w-6 eye" />
            </h6>

            <div className='options'>
                <div onClick={() => handelOption(options[0])}>{options[0]}</div>
                <div onClick={() => handelOption(options[1])}>{options[1]}</div>
                <div onClick={() => handelOption(options[2])}>{options[2]}</div>
                <div onClick={() => handelOption(options[3])}>{options[3]}</div>
            </div>
            
        </div>
    );
};

export default Quiz;