import React from 'react';
import './Cover.css'
import Card from 'react-bootstrap/Card';

const Cover = () => {
    return (
        <div>
            <Card >
                <Card.Img className='container cover' src="https://media.istockphoto.com/photos/quiz-word-sitting-next-to-a-white-alarm-clock-on-blue-background-picture-id1356323195?b=1&k=20&m=1356323195&s=170667a&w=0&h=Eg5htbLAn4CwcUXxzIRJ_z1CuknP8nLNDfIxp5_zHSM=" />
                <Card.Body>
                    <Card.Text>
                        <p className='fw-bold fs-3 txt'>Clear Your Basic Knowledge From Quiz Station</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cover;