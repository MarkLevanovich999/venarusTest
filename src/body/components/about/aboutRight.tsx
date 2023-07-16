import React from 'react';
import './style/aboutRight.css';

function AboutRight() {

    let text1: String = 'Помогает предотвратить судороги';
    let text2: String = 'Способствует снижению тяжести в ногах';
    let text3: String = 'Способствует снижению болевых ощущений';

    return (
        <div className='aboutRight'>

            <hr/>

            <div className='aboutInfoDivToLeft'>
                <img src={require('./content/about1.png')}/>
                <p>{text1}</p>
            </div>

            <hr/>

            <div className='aboutInfoDivToRight'>
                <p>{text2}</p>
                <img src={require('./content/about2.png')}/>
            </div>

            <hr/>

            <div className='aboutInfoDivToLeft'>
                <img src={require('./content/about3.png')}/>
                <p>{text3}</p>
            </div>

            <hr/>

        </div>
    );
}

export default AboutRight;