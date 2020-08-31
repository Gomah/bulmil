import { defineCustomElements } from 'bulmil/dist/loader';

export * from './proxies';

if (typeof window !== 'undefined') {
  defineCustomElements(window);
}
