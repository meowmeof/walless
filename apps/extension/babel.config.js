module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					components: './src/components',
					stacks: './src/stacks',
					screens: './src/screens',
					utils: './src/utils',
					bridge: './src/bridge',
				},
			},
		],
		['@babel/plugin-proposal-private-methods', { loose: true }],
		'@babel/plugin-proposal-export-namespace-from',
		'react-native-web',
	],
};
