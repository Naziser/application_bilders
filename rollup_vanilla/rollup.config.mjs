import { rollupPluginHTML as html } from '@web/rollup-plugin-html';

// rollup.config.mjs
export default {
	input: 'src/index.html',
	output: {
    dir: 'dist'
	},
  plugins: [html()],
};
