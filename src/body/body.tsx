import React from 'react';
import './style/body.css';
import Info from "./components/info/info";
import About from "./components/about/about";
import Opinion from "./components/opinion/opinion";
import Recommendations from "./components/recommendations/recommendations";
import WhereBye from "./components/whereBye/whereBye";

function Body({...props}) {
    return (
        <div className='body'>
            <Info/>
            <About anchor={props.anchor}/>
            <Opinion anchor={props.anchor}/>
            <Recommendations anchor={props.anchor}/>
            <WhereBye anchor={props.anchor}/>
        </div>
    );
}

export default Body;