import React from 'react'
import PropTypes from 'prop-types'

const Button = ({bType,pType,value,clickHandler}) => {
    return (
        <button className={bType} onClick={()=>{
            console.log('primera arrow function')
            clickHandler()
        }}>
            <p className={pType}>{value}</p>
        </button>
    )
}

Button.propTypes = {
    bType: PropTypes.string,
    pType: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    clickHandler:PropTypes.func.isRequired,
}

export default Button

/*
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            console.log('Funciona el onClick ' + text)
            clickHandler(type)
        }}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler:PropTypes.func.isRequired
}

export default Button 
*/