import React from 'react';
import './style/recommendations.css';
import RecommendationsLeft from "./recommendationsLeft";
import RecommendationsMiddle from "./recommendationsMiddle";
import RecommendationsRight from "./recommendationsRight";

function Recommendations({...props}) {
    return (
        <div id={props.anchor[3]} className='recommendations'>
            <RecommendationsLeft/>
            <RecommendationsMiddle/>
            <RecommendationsRight/>
        </div>
    );
}

export default Recommendations;