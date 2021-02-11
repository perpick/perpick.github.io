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
    "parserOptions": {
        project: "./tsconfig.json",
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [ "@typescript-eslint", "svelte3"],
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
			"files": ["**/*.tsx"],
			"rules": {
				"react/prop-types": "off"
			}
		},
		{
		  "files": ["**/*.svelte"],
		  "processor": "svelte3/svelte3"
		}
	]
}