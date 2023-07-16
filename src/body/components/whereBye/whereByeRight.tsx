import React from 'react';
import './style/whereByeRight.css';

function WhereByeRight() {
    return (
        <div className='whereByeRight'>
            <img id='whereByeRightOne' src={require('./content/whereBye1.png')}/>
            <img id='whereByeRightTwo' src={require('./content/whereBye2.png')}/>
        </div>
    );
}

export default WhereByeRight;