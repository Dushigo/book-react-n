module.exports = {
    "extends": [
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "tsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    },
    "settings": {
        'import/resolver': {
            "node": {
                "extensions": ['.js', '.jsx', '.ts', '.tsx'],
                "paths": ['./app']
            }
        }
    },
};