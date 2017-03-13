import React, {Component, PropTypes} from 'react'

export default (Control) => class ValidateField extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        validationSchema: PropTypes.shape({}).isRequired
    }

    validate = () => {
        var errorMessage = ''
        const {validationSchema, name, label, value, setError} = this.props
        const schema = validationSchema[name]
        console.log('validate(): ' + name + ', ' + value + ', ' + schema.max + ', ' + schema.required)

        if( schema.required && JSON.parse(schema.required) === true && !value ) {
            errorMessage = label + ' is required';
            console.log('validate(): ' + errorMessage)
        }

        if( schema.max && schema.max > 0 && value.length > schema.max ) {
            errorMessage = label + ' must not exceed ' + schema.max + ' chars (current length is ' + value.length + ')'
            console.log('validate(): ' + errorMessage)
        }

        setError(name, errorMessage)
    }

    render() {
        return <Control {...this.props} {...this.state} />
    }
}