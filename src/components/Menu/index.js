import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    }

    static contextTypes = {
        i18n: PropTypes.object
    }

    render() {
        const {i18n} = this.context
        return (
            <div>
                <h3>{i18n.MENU}</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu