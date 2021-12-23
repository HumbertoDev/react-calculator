import React from 'react'

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            console.log('Funciona el onClick')
            clickHandler()
        }}>
            <span>{text}</span>
        </button>
    )
}

export default Button 