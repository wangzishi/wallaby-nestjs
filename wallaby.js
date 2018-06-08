module.exports = function () {
    return {
        files: [
            'tsconfig.json',
            'package.json',
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*spec.ts', ignore: true }
        ],
        tests: [
            { pattern: 'src/**/*spec.ts', load: false },
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest',
        setup: function (wallaby) {
            const jestConfig = require('./package.json').jest;
            console.log(jestConfig);
            wallaby.testFramework.configure(jestConfig);
        },
        debug: true
    };
};