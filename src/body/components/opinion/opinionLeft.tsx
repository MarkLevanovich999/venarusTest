import React from 'react';
import './style/opinionLeft.css';

function OpinionLeft() {

    let heading: String = 'Мнение специалистов';
    let text: String = 'Фармакотерапия — неотъемлемый компонент современного лечения хронического заболевания вен.';

    return (
        <div className='opinionLeft'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    );
}

export default OpinionLeft;