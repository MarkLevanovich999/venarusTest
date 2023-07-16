import React from 'react';
import './style/opinion.css';
import OpinionLeft from "./opinionLeft";
import OpinionRight from "./opinionRight";

function Opinion({...props}) {
    return (
        <div id={props.anchor[2]} className='opinion'>
            <OpinionLeft/>
            <OpinionRight/>
        </div>
    );
}

export default Opinion;