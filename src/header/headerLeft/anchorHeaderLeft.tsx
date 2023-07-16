import React from 'react';
import './style/anchorHeaderLeft.css';

function AnchorHeaderLeft({...props}) {
    return (
        <div className='anchorHeaderLeft'>
            <img width={props.width} height={props.height} src={require(`${props.anchorImages}`)}/>
            <a>{props.anchorTexts}</a>
        </div>
    );
}

export default AnchorHeaderLeft;