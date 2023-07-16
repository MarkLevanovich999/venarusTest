import React from 'react';
import './style/recommendationsLeft.css';

function RecommendationsLeft() {

    let text: String = 'Полезная информация';

    return (
        <div className='recommendationsLeft'>
            <h1>{text}</h1>
        </div>
    );
}

export default RecommendationsLeft;