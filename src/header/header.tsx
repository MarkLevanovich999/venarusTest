import React from 'react';
import './style/header.css';
import Menu from "./menu/menu";
import HeaderLeft from "./headerLeft/headerLeft";
import HeaderRight from "./headerRight/headerRight";

function Header({...props}) {

    const menuAnchor = ['#header','#about','#opinion','#rec','#where'];

    return (
        <div id={props.anchor[0]} className='header'>
            <Menu menuAnchor={menuAnchor}/>
            <img className='backgroungHeader' src={require('./content/backgroundHeader.png')}/>
            <div className='headerBody'>
                <HeaderLeft/>
                <HeaderRight/>
            </div>
        </div>
    );
}

export default Header;