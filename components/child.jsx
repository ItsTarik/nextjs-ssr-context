import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export class Child extends React.Component {
  registerComponent = (id) => `
    if (window.ids) {
      window.ids = [...window.ids, ${id}];
    } else window.ids = [${id}];
  `;
  render() {
    return (
      <Fragment>
        <Head>
          <script
            className="track"
            dangerouslySetInnerHTML={{
              __html: `${this.registerComponent(this.props.id)}`,
            }}
          />
        </Head>
        <div id={this.props.id} />
      </Fragment>
    );
  }
}

export default Child;
