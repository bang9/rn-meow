module.exports = {
    root: true,
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    }
};
