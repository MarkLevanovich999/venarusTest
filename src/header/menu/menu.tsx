import React, {useState} from 'react';
import './style/menu.css';

function Menu({...props}) {

    const [activeMenu, setActiveMenu] = useState(false);

    let buttonBye: String = 'Где купить';
    const menu = ['Где купить','О препарате','О варикозе','Решение','Специалистам'];

    return (
        <div className='menu'>

            <div style={activeMenu ? {transform: 'translateY(0)', transition: '0.5s'} : {transform: 'translateY(-100%)', transition: '0.5s'}} className='activeMenu'>

                <div className='topbarActiveMenu'>
                    <img className='logoActivMenu' src={require('./content/logo.png')}/>
                    <button onClick={() => setActiveMenu(!activeMenu)} className='buttonTopbarActiveMenu'>
                        <img src={require('./content/activeMenu.png')}/>
                    </button>
                </div>

                <div className='bodyActiveMenu'>
                    <ul>
                        <li><a href={props.menuAnchor[0]}>{menu[0]}</a></li>
                        <li><a href={props.menuAnchor[1]}>{menu[1]}</a></li>
                        <li><a href={props.menuAnchor[2]}>{menu[2]}</a></li>
                        <li><a href={props.menuAnchor[3]}>{menu[3]}</a></li>
                        <li><a href={props.menuAnchor[4]}>{menu[4]}</a></li>
                    </ul>
                </div>

            </div>

            <div className='topbar'>
                <img className='logo' src={require('./content/logo.png')}/>
                <button className='buttonBye'><p>{buttonBye}</p></button>
                <button onClick={() => setActiveMenu(!activeMenu)} className='buttonMenu'>
                    <img src={require('./content/menu.png')}/>
                </button>
            </div>

        </div>
    );
}

export default Menu;