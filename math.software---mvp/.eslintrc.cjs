// Copyright (c) 2024 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/mathsoftware/mathsoftware---mvp

module.exports = {
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "es2022",
        sourceType: "module",
        project: [ "tsconfig.json", "tsconfig.node.json" ],
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
    },
    env: { browser: true, es2022: true, },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        indent: [
            "error",
            4,
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        quotes: [
            "error",
            "double",
        ],
        semi: [
            "error",
            "always",
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
    ignorePatterns: [ ".eslintrc.cjs", "dist/*" ],
    overrides: [
        {
            env: { node: true, },
            files: [ ".eslintrc.{js,cjs}", ],
            parserOptions: { sourceType: "script", },
        },
    ],
};
