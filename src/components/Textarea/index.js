import React, { Component, PropTypes } from 'react'
import validateField from '../../decorators/validateField'

function Textarea(props) {
    const {name, label, value, error, onChange} = props
    return(
        <div className="comment-input">
            <label className="comment">{label}</label>
            <div className="validated-input">
                <textarea rows="4" name={name} value={value} onChange={onChange}></textarea>
                <label className="validation-error">{error}</label>
            </div>
        </div>
    )
}

Textarea.propTypes = {
}

export default validateField(Textarea)