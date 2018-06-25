import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export class Child extends React.Component {
  componentDidMount() {
    // making sure that the component is hydrated
    console.log('mounted....');
  }
  render() {
    return (
      <Fragment>
        <Head>
          <meta className="track" id={this.props.id} />
        </Head>
        <div id={this.props.id} />
      </Fragment>
    );
  }
}

export default Child;
