module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/function-component-definition": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-array-index-key": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "no-unused-vars": "warn",
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-props-no-spreading": 0,
    "no-alert": 0,
    "jsx-a11y/media-has-caption" :0,
  },
};
