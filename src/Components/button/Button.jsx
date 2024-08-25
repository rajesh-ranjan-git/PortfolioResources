import React from 'react'
import PropTypes from 'prop-types'

import './button.scss';

const Button = props => {
  return (
    <button className={`btn ${props.className}`}
    onClick={props.onClick ? ()=>props.onClick():null}
    >
        {props.children}
    </button>
  );
}

export const OutlineButton = props =>{
    return ( <Button className={`btn_outline ${props.className}`}
    onClick={props.onClick ? ()=>props.onClick():null}
    >
            {props.children}
    </Button>);
}

Button.propTypes = {
    onClick: PropTypes.func
}



export const ButtonMask1 = props =>{
    return (
        <div  className={`button_container_1 ${props.className}`}>
            <span className="mas">{props.children}</span>
            <button id='work' type="button" name="Hover" onClick={props.onClick?()=>props.onClick():null}>{props.children}</button>
        </div>
    )
}

export const ButtonMask2 = props =>{
    return (
        <div  className={`button_container_3 ${props.className}`}>
            <span className="mas">{props.children}</span>
            <button id='work' type="button" name="Hover" onClick={props.onClick?()=>props.onClick():null}>{props.children}</button>
        </div>
    )
}



export default Button;
