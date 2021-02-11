module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.svelte$": [
          "svelte-jester",
          {
            "preprocess": true
          }
        ],
        "^.+\\.ts$": "ts-jest"
      },
      "moduleFileExtensions": [
        "js",
        "ts",
        "svelte"
      ],
      "moduleNameMapper": {
        "@src/(.*)": "<rootDir>/src/$1",
      }
  }