//HOC === Decorator
import React from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openEntityId: null
    }

    render() {
        console.log('Decorator Accordion.render()')
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenEntity} openEntityId={this.state.openEntityId}/>
    }

    toggleOpenEntity = openEntityId => ev => {
        console.log('Decorator Accordion.toggleOpenEntity( ' + openEntityId + ' )')
        this.setState({
            openEntityId
        })
    }
}
