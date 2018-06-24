import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export class Child extends React.Component {
  static contextTypes = { registerComponent: PropTypes.func };

  render() {
    return (
      <Fragment>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ids = window.ids ? [...window.ids, ${
                this.props.id
              }] : [${this.props.id}]`,
            }}
          />
        </Head>
        <div id={this.props.id} />
      </Fragment>
    );
  }
}

export default Child;
