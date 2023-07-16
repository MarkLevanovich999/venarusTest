import React from 'react';
import './style/about.css';
import AboutLeft from "./aboutLeft";
import AboutRight from "./aboutRight";

function About({...props}) {
    return (
        <div id={props.anchor[1]} className='about'>
            <AboutLeft/>
            <AboutRight/>
        </div>
    );
}

export default About;