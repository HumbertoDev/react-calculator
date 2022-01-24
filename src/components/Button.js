import React from 'react'
import PropTypes from 'prop-types'

// Componente Funcional
const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => {
        console.log('funcion en button.js')
        clickHandler(text)
        }}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
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