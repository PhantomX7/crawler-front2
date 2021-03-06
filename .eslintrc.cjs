module.exports = {
	root: true,
	parser: "babel-eslint",
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		allowImportExportEverywhere: true,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
