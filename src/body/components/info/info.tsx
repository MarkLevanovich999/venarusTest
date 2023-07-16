import React, {useState} from 'react';
import './style/info.css';
import Discount from "./discount";

function Info() {

    const[activeButton, setActiveButton] = useState(false);

    const text = ['Доказанная эффективность', 'Новая дозировка 100 мг + 900 мг', 'Удобный прием. Одна таблетка в сутки*']
    const images = ['./content/info1.png', './content/info2.png', './content/info3.png']

    let mainDiscount: String = 'получить скидку 10% >>> получить скидку 10% >>> ';
    let warning: String = 'Имеются противопоказания, необходимо ознакомиться с инструкцией или получить консультацию специалиста';

    return (
        <div className='info'>

            <div style={activeButton ? {display: 'flex', transition: '0.5s'} : {display: 'none', transition: '0.5s'}} className='warning'>
                <p>{warning}</p>
                <button onClick={() => setActiveButton(!activeButton)}><img src={require('./content/closeIcon.png')}/></button>
            </div>

            <div className='mainDiscount'>
                <p>{mainDiscount}</p>
            </div>

            <div className='discounts'>
                <Discount width={67} height={67} text={text[0]} images={images[0]}/>
                <Discount width={67} height={57} text={text[1]} images={images[1]}/>
                <Discount width={67} height={57} text={text[2]} images={images[2]}/>
                <button onClick={() => setActiveButton(!activeButton)} className='infoIcon'>
                    <img src={require('./content/i.png')}/>
                </button>
            </div>

        </div>
    );
}

export default Info;