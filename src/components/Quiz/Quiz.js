import React from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    const { question, correctAnswer, options } = quiz;
    const handelOption = (ans, position) =>{
        console.log(position)
        const correctAns = correctAnswer;
        const givenAns = ans;
        if(givenAns === correctAns && options[position] === givenAns){

             toast ('Correct Answer');
            return;
        }
        else if (givenAns !== correctAns && options[position] === givenAns){
             toast('Wrong Answer');
            return;
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
                <div onClick={() => handelOption(options[0], 0)}>{options[0]}</div>
                <div onClick={() => handelOption(options[1],1)}>{options[1]}</div>
                <div onClick={() => handelOption(options[2],2)}>{options[2]}</div>
                <div onClick={() => handelOption(options[3],3)}>{options[3]}</div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;