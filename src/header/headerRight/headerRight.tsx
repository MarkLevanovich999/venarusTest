import React from 'react';
import './style/headerRight.css';

function HeaderRight() {

    let text: String = 'Где купить >'

    return (
        <div className='headerRight'>

            <div className='slider'>
                <img className='leftPack' src={require('./content/leftPack.png')}/>
                <img className='centrePack' src={require('./content/centrePack.png')}/>
                <img className='rightPack' src={require('./content/rightPack.png')}/>
            </div>

            <div className='buttonsHeaderRight'>
                <div className='buttonsSlider'>
                    <button><img src={require('./content/buttonLeft.png')}/></button>
                    <div className='paddingSliderButton'></div>
                    <button><img src={require('./content/buttonRight.png')}/></button>
                </div>
                <button className='buttonWhereByeHeaderRight'>{text}</button>
            </div>

            <div className='buttonsHeaderRightMobile'>
                <div className='buttonsSlider'>
                    <button><img src={require('./content/buttonLeftMobile.png')}/></button>
                    <div className='paddingSliderButton'></div>
                    <button><img src={require('./content/buttonRightMobile.png')}/></button>
                </div>
                <button className='buttonWhereByeHeaderRight'>{text}</button>
            </div>

        </div>
    );
}

export default HeaderRight;