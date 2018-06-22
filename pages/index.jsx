import React from "react"
import Child from "../components/child"

export default class extends React.Component {
  render () {
    return (
      <div>
        <Child id="1" />
        <Child id="2" />
        <Child id="3" />
        <Child id="4" />
      </div>
    )
  }
}