import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  define: {
    'process.env.VITE_TOMTOM_ACCESS_TOKEN': JSON.stringify(
      process.env.VITE_TOMTOM_ACCESS_TOKEN,
    ),
  },
});
