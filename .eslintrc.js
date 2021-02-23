
const eslintSveltePreprocess = require("eslint-svelte3-preprocess");
const svelteConfig = require("./svelte.config");

module.exports = {
    "env": {
        es6: true,
        browser: true,
        jest: true,
    },
    "extends": [
        "eslint:recommended",
		"plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
	parserOptions: {
		// add these parser options
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte'],
	},
    plugins: ["svelte3", "@typescript-eslint"],
	"rules": {
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-empty-interface": [
			"warn",
			{
			  "allowSingleExtends": true
			}
		],
		"@typescript-eslint/ban-types": [
			"warn",
			{
			  "types": {		
				"{}": {
				  "message": "Use object instead",
				  "fixWith": "object"
				},
				"object": {
					"message": "Use object instead",
					"fixWith": "object"
				}
			  }
			},
		],
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-unsafe-return": "warn",
		"@typescript-eslint/explicit-module-boundary-types": "warn",
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
			}
		]
	},
	"overrides": [
		{
		  "files": ["**/*.svelte"],
		  "processor": "svelte3/svelte3"
		}
	],
    settings: {
        "svelte3/preprocess": eslintSveltePreprocess(svelteConfig.preprocess),
    },
}