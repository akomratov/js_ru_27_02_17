import React, { PropTypes } from 'react'

function NotFound(props, context) {
    const {i18n} = context
    return (
        <div>
            <h1>{i18n.NOT_FOUND}</h1>
        </div>
    )
}

NotFound.propTypes = {
}

NotFound.contextTypes = {
    i18n: PropTypes.object
}

export default NotFound