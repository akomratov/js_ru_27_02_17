//HOC === Decorator
import React from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        console.log('Decorator toggleOpen.render()')
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }
}