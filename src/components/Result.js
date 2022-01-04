import React from "react"
import PropTypes from "prop-types" 

const Result = ({ value }) => {
    console.log("Renderizacion de result " + value)
    return (
        <div className="result-container">
            {value}
        </div>
    )
}

Result.propTypes =  {
    value : PropTypes.number
}

Result.defaultProps = {
    value: '0'
}

export default Result