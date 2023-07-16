import React from 'react';
import './style/recommendationsMiddle.css';

function RecommendationsMiddle() {

    let text: String = 'Профилак- тические упражнения';

    return (
        <div className='recommendationsMiddle'>
            <img src={require('./content/recMiddle.png')}/>
            <p>{text}</p>
        </div>
    );
}

export default RecommendationsMiddle;