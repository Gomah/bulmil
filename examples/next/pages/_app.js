import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

if (process.browser) {
  const { applyPolyfills, defineCustomElements } = require('@bulmil/core/dist/loader');

  applyPolyfills().then(() => {
    defineCustomElements();
  });
}

export default MyApp;
