import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
	input: 'contentScript.js', // Your source script
	output: {
		file: 'dist/contentScript.bundle.js', // Output bundle
		format: 'iife', // Immediately-invoked function expression — suitable for content scripts
		sourcemap: 'inline', // Optional: enables source maps
	},
	plugins: [resolve(), commonjs(), babel({ babelHelpers: 'bundled' })],
};
