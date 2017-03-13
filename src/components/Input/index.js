import React, { Component, PropTypes } from 'react'
import validateField from '../../decorators/validateField'

function Input(props) {
    const {name, label, value, error, onChange} = props
    return(
        <div className="comment-input">
            <label className="comment">{label}</label>
            <div className="validated-input">
                <input type="text" name={name} value={value} onChange={onChange}/>
                <label className="validation-error">{error}</label>
            </div>
        </div>
    )
}

Input.propTypes = {
}

export default validateField(Input)
