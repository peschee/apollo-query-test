import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: {
    exportConditions: ['development'],
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
};
