const lazyImports = require('metro-react-native-babel-preset/src/configs/lazy-imports');

module.exports = {
	ignore: ['node_modules/detox'],
	plugins: [
		'@babel/plugin-transform-flow-strip-types',
		'@babel/plugin-proposal-optional-catch-binding',
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true
			}
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-export-default-from',
		'@babel/plugin-transform-react-jsx',
		'@babel/plugin-transform-sticky-regex',
		'@babel/plugin-transform-unicode-regex',
		'@babel/plugin-proposal-export-default-from',
		[
			'@babel/plugin-transform-modules-commonjs',
			{
				allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
				lazy: importSpecifier => lazyImports.has(importSpecifier),
				strict: false,
				strictMode: false // prevent "use strict" injections
			}
		],
		'@babel/plugin-proposal-object-rest-spread',
		//'metro-react-native-babel-preset/src/transforms/transform-symbol-member',
		'@babel/plugin-transform-react-display-name',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
		[
			'@babel/plugin-transform-runtime',
			{
				helpers: true,
				regenerator: true
			}
		],
		[
			'rewrite-require',
			{
				aliases: {
					_stream_duplex: 'readable-stream/duplex',
					_stream_passthrough: 'readable-stream/passthrough',
					_stream_readable: 'readable-stream/readable',
					_stream_transform: 'readable-stream/transform',
					_stream_writable: 'readable-stream/writable',
					crypto: 'react-native-crypto',
					stream: 'readable-stream',
					vm: 'vm-browserify'
				}
			}
		],
		[
			'module-resolver',
			{
				alias: {
					components: './src/components',
					constants: './src/constants',
					e2e: './test/e2e',
					modules: './src/modules',
					res: './res',
					screens: './src/screens',
					stores: './src/stores',
					styles: './src/styles',
					types: './src/types',
					utils: './src/utils'
				},
				root: ['.']
			}
		],
		['./scripts/rewrite-node-global']
	],
	presets: ['@babel/preset-typescript']
};
