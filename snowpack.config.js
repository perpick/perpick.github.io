/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: "@snowpack/app-scripts-svelte",
	alias: {
		"@src": "./src"
	},
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	packageOptions: {
		installTypes: true,
		polyfillNode: true,
	},
	devOptions: {
		port: 57829,
	},
	buildOptions: {
		clean: true,
		out: "dist",
	},
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: "es2020",
	},
};
