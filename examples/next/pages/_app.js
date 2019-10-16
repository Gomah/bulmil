import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

if (process.browser) {
  const { applyPolyfills, defineCustomElements } = require('bulmil/dist/loader');

  applyPolyfills().then(() => {
    defineCustomElements(window);
  });
}

export default MyApp;
