module.exports = {
    // 指定校验的ecma的版本，及ecma的一些特性
    "parserOptions": {
        "ecmaVersion": 8, //指定ECMAScript支持的版本，6为ES6
        "sourceType": "module" //指定来源的类型，有两种”script”或”module”
    },
    // Environment可以预设其他环境的全局变量，如brower、node、es6、mocha环境变量等
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    // 指定你所要使用的全局变量
    "globals": {
        "document": true,
        "navigator": true,
        "window":true,
        "node":true
    },
    // 使用第三方Airbnb开发配置合集eslint-config-airbnb
    "extends": "airbnb",
    // eslint-config-airbnb包括了以下3个插件
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "comma-dangle": ["error", "never"], // 列表或数组末尾不允许逗号
        "indent": ["error", 4], // js代码4格缩进
        'no-console': ["error", { allow: ["info", "warn", "error"] }], // 允许console调试打印
        "arrow-body-style": ["off", "always"],
        "arrow-parens": ["off"],
        "react/prop-types": ["off"] // 关闭组件属性校验
    }
};