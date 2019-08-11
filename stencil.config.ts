import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'Bulmil',
  globalStyle: 'bulmil.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/main.scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    { type: 'dist' },
    // {
    //   type: 'dist-types',
    //   typesDir: 'types/',
    //   dir: 'dist/types',
    // },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    { type: 'docs-readme', strict: true },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
      },
    ],
  },
  preamble: 'Bulmil - MIT License',
};
