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
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
