import { client } from './client';

window.__APOLLO_CLIENT__ = client;

(async () => {
  try {
    await import('./src/components/app-shell');
  } catch (e) {
    console.error('Could not initialize application', e);
  }
})();
