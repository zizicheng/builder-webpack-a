module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true
        }],
        "linebreak-style": [0, "error", "window"],
        "global-require": 0,
        "no-console": 0
    }
};