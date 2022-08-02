import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// if (process.browser) {
//   const { applyPolyfills, defineCustomElements } = require('@bulmil/core/dist/loader');

//   applyPolyfills().then(() => {
//     defineCustomElements();
//   });
// }

export default MyApp;
