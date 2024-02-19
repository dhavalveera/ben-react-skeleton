module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    "jsx-a11y/anchor-is-valid": "off", // Next.js uses its own internal link system
    "react/require-default-props": "off", // Allow non-defined react props as undefined
    "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
    "import/prefer-default-export": "off", // Named export is easier to refactor automatically
    "react/react-in-jsx-scope": "off",
    "import/no-duplicates": "error",
    "import/no-unresolved": "off",
    "import/named": "error",
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "always",
        css: "always",
      },
    ],
    "prettier/prettier": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/state-in-constructor": "off",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "off",
    "react/no-danger": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-will-update-set-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
      },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
    "no-param-reassign": ["error", { props: false }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "class-methods-use-this": "off",

    // overriding recommended rules
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-console": [
      "error",
      { allow: ["log", "warn", "error", "group", "groupEnd"] },
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "consistent-return": "off",
    "react-refresh/only-export-components": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "allow-empty-reject": "off",
    "no-prototype-builtins": "off",
    "prefer-promise-reject-errors": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
      },
      alias: {
        map: [
          ["@/public", "./public"],
          ["@/styles", "./styles"],
          // Add more here
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
