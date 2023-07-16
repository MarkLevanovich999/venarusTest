import React from 'react';
import './style/aboutLeft.css';

function AboutLeft() {

    let heading: String = 'О препарате';
    let text: String = 'Венарус показан для терапии симптомов хронических заболеваний вен (устранения и облегчения симптомов).';
    let link: String = 'Подробнее >';

    return (
        <div className='aboutLeft'>
            <h1>{heading}</h1>
            <p>{text}</p>
            <a>{link}</a>
        </div>
    );
}

export default AboutLeft;