module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb","plugin:prettier/recommended"],
    env: {
      browser: true,
    },
  rules: {
      "max-len": [1, {"code": 160, "tabWidth": 2}],
      "react/jsx-closing-tag-location":"warn",
      "react/jsx-indent": "warn",
      "react/jsx-indent-props": "warn",
      "prettier/prettier": "warn",
      "linebreak-style":"off",
      "no-underscore-dangle": 0,
      "no-unused-vars": ["warn", {
        ignoreRestSiblings: true
      }],
      "jsx-a11y/anchor-is-valid": ["warn", {
        "components": ["Link"],
        "specialLink": ["to"]
      }],
      // These are temporarily ignored so we can get rolling, we'll enable them later.
      camelcase: 0,
      'react/prop-types': 0,
      'react/sort-comp': 0,
      'react/no-unused-state': 1,
      "react/jsx-uses-vars": [1],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      // end temporary rule disable
    },
    "overrides": [
      {
          "files": ["**/*.test.js"],
          "env": {
              "jest": true
          },
      }
    ],
    settings: {
      "import/resolver": {
        node: {
          moduleDirectory: ["src/", "node_modules/"]
        }
      }
    }
  };