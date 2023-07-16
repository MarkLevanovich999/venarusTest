import React from 'react';
import './style/opinionRight.css';

function OpinionRight() {
    return (
        <div className='opinionRight'>

            <img src={require('./content/opinion.png')}/>

            <div className='opinionButtons'>
                <button></button>
                <button></button>
                <button></button>
            </div>

        </div>
    );
}

export default OpinionRight;