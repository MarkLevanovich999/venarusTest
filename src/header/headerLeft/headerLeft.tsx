import React from 'react';
import './style/headerLeft.css';
import AnchorHeaderLeft from "./anchorHeaderLeft";

function HeaderLeft() {

    let text: String = 'НАДЕЖНЫЙ ПОМОЩНИК В ЛЕЧЕНИИ ВАРИКОЗА';

    const anchorImages = ['./content/anchor1.png', './content/anchor2.png', './content/anchor3.png'];
    const anchorTexts = ['Схема приема', 'Инструкция', 'Где купить'];

    return (
        <div className='headerLeft'>
            <p>{text}</p>
            <div className='anchorsHeaderLeft'>
                <AnchorHeaderLeft width={67} height={67} anchorImages={anchorImages[0]} anchorTexts={anchorTexts[0]}/>
                <AnchorHeaderLeft width={68} height={67} anchorImages={anchorImages[1]} anchorTexts={anchorTexts[1]}/>
                <AnchorHeaderLeft width={68} height={80} anchorImages={anchorImages[2]} anchorTexts={anchorTexts[2]}/>
            </div>
        </div>
    );
}

export default HeaderLeft;