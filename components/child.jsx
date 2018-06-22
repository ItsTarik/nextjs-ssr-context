import React from "react"
import PropTypes from "prop-types"

export class Child extends React.Component {
  static contextTypes = { registerComponent: PropTypes.func }

  constructor (props) {
    super(props)

    console.log("constructor", props, this.context)

    // this.context.registerComponent(props.id)
  }

  componentDidMount () {
    console.log("componentDidMount", this.props, this.context)
    this.context.registerComponent(this.props.id)
  }

  render () {
    return <div id={ this.props.id } />
  }
}

export default Child
