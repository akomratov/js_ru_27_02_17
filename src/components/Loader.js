import React, { PropTypes } from 'react'

function Loader(props, context) {
    const {i18n} = context
    return (
        <h2>{i18n.LOADING}</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
    i18n: PropTypes.object
}

export default Loader