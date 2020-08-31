import { defineCustomElements } from '@bulmil/core/dist/loader';

export * from './proxies';

if (typeof window !== 'undefined') {
  defineCustomElements(window);
}
