import { defineCustomElements } from '@bulmil/core/dist/loader';

export * from './components';

if (typeof window !== 'undefined') {
  defineCustomElements(window);
}
