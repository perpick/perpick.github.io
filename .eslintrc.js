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
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
	"settings": {
		"react": {
			"version": "detect"
		}
	},
    plugins: ["svelte3", "@typescript-eslint"],
	"rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"import/no-unresolved": 0,
		"react/jsx-filename-extension": [
			2,
			{
				"extensions": [
					".ts",
					".tsx"
				]
			}
		],
		"react/jsx-indent": [
			2,
			2
		],
		"react/jsx-indent-props": [
			2,
			2
		],
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