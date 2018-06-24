import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static childContextTypes = {
    registerComponent: PropTypes.func,
  };

  state = { mountedComponents: [] };

  getChildContext() {
    return {
      registerComponent: this.registerComponent,
    };
  }

  registerComponent = (id) => {
    this.setState(({ mountedComponents }) => {
      return { mountedComponents: [...mountedComponents, id] };
    });
  };

  render() {
    // console.log(this.state.mountedComponents);
    return (
      <>
        {/* <Head>
          <script dangerouslySetInnerHTML={ { __html: `window.ids = [${ this.state.mountedComponents.join(",") }]` } } />
        </Head> */}
        {this.props.children}
      </>
    );
  }
}
