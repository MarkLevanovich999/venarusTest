import React from 'react';
import './style/discount.css';

function Discount({...props}) {
    return (
        <div className='discount'>
            <img width={props.width} height={props.height} src={require(`${props.images}`)}/>
            <p>{props.text}</p>
        </div>
    );
}

export default Discount;