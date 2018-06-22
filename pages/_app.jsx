import NextApp, { Container } from "next/app"
import React from "react"

import Provider from "../components/provider"

export class App extends NextApp {
  state = { loading: false, showMenuOverflowMenu: false }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider>
          <div>Here</div>
          <Component { ...pageProps } />
        </Provider>
      </Container>
    )
  }
}

export default App
