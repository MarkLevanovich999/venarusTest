import React from 'react';
import './style/whereBye.css';
import WhereByeLeft from "./whereByeLeft";
import WhereByeRight from "./whereByeRight";

function WhereBye({...props}) {

    let text1: String = 'apteka.ru';
    let text2: String = '366.ru';
    let text3: String = 'stolichki.ru';

    return (
        <div id={props.anchor[4]} className='whereBye'>

            <div className='whereByeTop'>
                <WhereByeLeft/>
                <WhereByeRight/>
            </div>

            <div className='whereByeBottom'>
                <button>{text1}</button>
                <button>{text2}</button>
                <button>{text3}</button>
            </div>

        </div>
    );
}

export default WhereBye;