import React from 'react';
import './style/bottom.css';

function Bottom() {

    let textTop: String = 'Имеются противопоказания, необходимо ознакомиться с инструкцией или получить консультацию специалиста';
    let textBottomLeft: String = 'Сообщить о нежелательном явлении';
    let textBottomMiddleOne: String = 'Условия пользования сайтом и файлами Cookies';
    let textBottomMiddleTwo: String = 'г. Москва, ул. Шаболовка, д. 31, стр. 11 Телефон: +7 (495) 555-55-55';
    let bottomContentRightBottom: String = 'Создание сайтов Фарм-студия №1 в Рунете';

    return (
        <div className='bottom'>

            <div className='bottomTopText'>
                <p>{textTop}</p>
            </div>

            <div className='bottomContent'>

                <div className='bottomContentLeft'>
                    <p>{textBottomLeft}</p>
                </div>

                <div className='bottomContentMiddle'>
                    <p id='bottomContentMiddleOne'>{textBottomMiddleOne}</p>
                    <p id='bottomContentMiddleTwo'>{textBottomMiddleTwo}</p>
                </div>

                <div className='bottomContentRight'>
                    <div className='bottomContentRightTop'>
                        <img id='bottomImgOne' src={require('./content/vk.png')}/>
                        <img id='bottomImgTwo' src={require('./content/ok.png')}/>
                    </div>
                    <div className='bottomContentRightBottom'>
                        <img src={require('./content/pharm.png')}/>
                        <p>{bottomContentRightBottom}</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Bottom;