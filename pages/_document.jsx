// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js

import NextApp, { Container } from 'next/app';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const { head } = this.props;
    const idsFromHead = head.reduce(
      (acc, { props }) =>
        (props.className.includes('track') && [...acc, props.id]) || acc,
      []
    );
    console.log('idsFromHead', idsFromHead);
    return (
      <Container>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ids=[${idsFromHead}]`,
            }}
          />
        </Head>
        <h3>{idsFromHead}</h3>
        <Main />
      </Container>
    );
  }
}