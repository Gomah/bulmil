export * from '@bulmil/core';
export * from './proxies';

if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.type = 'module';
  script.defer = true;
  script.src = 'https://cdn.jsdelivr.net/npm/@bulmil/core@latest/dist/bulmil/bulmil.esm.js';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode!.insertBefore(script, firstScriptTag);
}
