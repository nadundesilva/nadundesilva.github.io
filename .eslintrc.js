module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard-with-typescript",
    "next/core-web-vitals"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
          "delimiter": "comma",
          "requireLast": true
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false
      },
      "multilineDetection": "brackets"
    }],
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/quotes": ["error", "double"],
    "import/order": ["error", {
      "groups": ["builtin", "external"],
      "pathGroups": [
        {
          "pattern": "@/components/**",
          "group": "internal"
        }
      ],
      "newlines-between": "always",
      "alphabetize": {
        "order": 'asc',
        "caseInsensitive": true
      },
      "warnOnUnassignedImports": true
    }],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
    }],
    "no-duplicate-imports": ["error", { "includeExports": true }]
  }
}
