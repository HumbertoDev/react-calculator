import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({onClickClear, onClickDelete}) =>{
    return (
        <section className='functions'>
            <Button text={'Clear'} clickHandler={onClickClear}/>
            <Button text='&larr;' clickHandler={onClickDelete}/>
        </section>
    )
}

Functions.propTypes = {
    onClickClear:PropTypes.func.isRequired,
    onClickDelete:PropTypes.func.isRequired
}

export default Functions