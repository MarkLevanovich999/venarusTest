import React from 'react';
import './style/recommendationsRight.css';

function RecommendationsRight() {

    let text1: String = 'Диагностика и способы лечения';
    let text2: String = 'Планы по питанию';
    let text3: String = 'Факты о варикозе';
    let button: String = 'Подробнее >';

    return (
        <div className='recommendationsRight'>

            <div className='recommendationsRightTop'>

                <div className='recommendationsRightTopToLeft'>
                    <img src={require('./content/recRightTopLeft.png')}/>
                    <p>{text1}</p>
                </div>

                <div className='recommendationsRightTopToRight'>
                    <img src={require('./content/recRightTopRight.png')}/>
                    <p>{text2}</p>
                </div>

            </div>

            <div className='recommendationsRightBottom'>
                <p>{text3}</p>
                <button>{button}</button>
            </div>

        </div>
    );
}

export default RecommendationsRight;