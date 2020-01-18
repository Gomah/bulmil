import path from 'path';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'Bulmil',
  globalStyle: 'bulmil.scss',
  excludeSrc: ['**/*.stories.tsx'],
  plugins: [
    sass({
      includePaths: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, '../../node_modules'),
      ],
      injectGlobalPaths: ['src/styles/main.scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'bulmil',
      proxiesFile: '../bulmil-react/src/components.ts',
      loaderDir: 'dist/loader',
    }),
    { type: 'dist' },
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
