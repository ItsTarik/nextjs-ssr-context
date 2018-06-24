import NextApp, { Container } from 'next/app';
import React from 'react';

import Provider from '../components/provider';

export class App extends NextApp {
  state = {
    loading: false,
    showMenuOverflowMenu: false,
    rerenderFromClient: 0,
  };

  componentDidMount() {
    /*
      added setState to add a rerender to distinguish the render
      from the server/browser
    */
    console.log('tracked ids before the app renders:', window.ids);
    this.setState({
      rerenderFromClient: 1,
      ids: window.ids,
    });
  }
  render() {
    const { rerenderFromClient, ids } = this.state;
    console.log(
      `rendring the <App /> in the ${rerenderFromClient ? 'browser' : 'server'}`
    );

    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider>
          <h3>
            {(rerenderFromClient &&
              `tracked ids:${ids} from the window object before the app renders`) ||
              'im still on the server'}
          </h3>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default App;
