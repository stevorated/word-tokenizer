module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
    },
    rules: {
        semi: 'error',
    },
    ignorePatterns: ['spec', 'node_modules/'],
};
