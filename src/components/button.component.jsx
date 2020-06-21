import React from 'react';

const style={
    color : "#4e4e4e",
    border : "2px solid #4e4e4e",
    background : "transparent",
    padding: "1.5rem 5rem",
    fontSize: "2rem",
    fontFamily: 'Bahnscrift',
    fontWeight: "100",
    borderRadius: "10px",
    transition:"all 0.25s ease-in",
    cursor: "pointer",
    outline: "none",
    margin : "3rem auto",
    textTransform : "uppercase"
}

const btnHoverEffect = (e)=>{

e.target.style.color = "#fff";
e.target.style.background = "#4e4e4e";
}
const btnHoverEffectOver = (e)=>{

e.target.style.color = "#4e4e4e";
e.target.style.background = "#fff";
}

function ButtonComponent(props) {
    return (
        <button style={style} onClick={props.cb}  onMouseOver={btnHoverEffect} onMouseLeave={btnHoverEffectOver} >{props.title}</button>
    )
}

export default ButtonComponent
