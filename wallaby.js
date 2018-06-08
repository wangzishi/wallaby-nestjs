module.exports = function () {
    return {
        files: [
            'tsconfig.json',
            'package.json',
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*spec.ts', ignore: true }
        ],
        tests: [
            { pattern: 'src/**/*spec.ts' },
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest',
        
        debug: true
    };
};
