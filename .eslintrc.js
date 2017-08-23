/*The rules for eslint: http://eslint.org/docs/rules/*/
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "ecmaFeatures": {
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true
    }
  },
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "arrow-parens": [2, "as-needed"],
    "no-console":0,
    "vars-on-top": 2, // requires to declare all vars on top of their containing scope (off by default)
    "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
    "camelcase": 1, // require camel case names
    "max-nested-callbacks": [1, 3], // specify the maximum depth callbacks can be nested (off by default)
    "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
    "indent": [2, 2],
    // "linebreak-style": [
    //   2,
    //   "windows"
    // ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    //
    // ECMAScript 6
    //
    // These rules are only relevant to ES6 environments and are off by default.
    "no-var": 2, // require let or const instead of var (off by default)
    "generator-star-spacing": [2, "before"], // enforce the spacing around the * in generator functions (off by default)
    "react/no-danger": 0, // turn off warning for dangerouslySetInnerHTML
    "react/no-string-refs": 2
  },
  "globals": {
    "__dirname": true,
    "process": true,
  }
};
