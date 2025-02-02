module.exports = {
	root: true,
	extends: ['@walless/eslint-config'],
	ignorePatterns: ['tool/batch/**', 'packages/core/utils/platform.ts'],
	env: {
		node: true,
	},
	globals: {
		window: true,
		document: true,
		navigator: true,
		fetch: true,
		WebAssembly: true,
	},
};
