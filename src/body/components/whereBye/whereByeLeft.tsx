import React from 'react';
import './style/whereByeLeft.css'

function WhereByeLeft() {

    let heading: String = 'Где купить';
    let text: String = 'Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках вашего города';

    return (
        <div className='whereByeLeft'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    );
}

export default WhereByeLeft;