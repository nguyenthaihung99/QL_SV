module.exports = {
    extends: ['@ken/eslint-config-javascript-standard-reactnative'],
    rules: {
        'prettier/prettier': [
            'error',
            { endOfLine: 'auto' },
            { usePrettierrc: true }
        ], // Use our .prettierrc file as source
        'react/jsx-indent-props': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'import/no-extraneous-dependencies': 'off',
        'template-curly-spacing': [2, 'never'],
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        'arrow-parens': ['error', 'always'],
        'react-native/no-inline-styles': 0,
        'no-shadow': [
            2,
            {
                builtinGlobals: false,
                hoist: 'never',
                allow: ['resolve', 'reject', 'done', 'cb']
            }
        ],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-restricted-syntax': [
            'error',
            'WithStatement',
            "BinaryExpression[operator='in']"
        ],
        radix: ['error', 'as-needed'],
        'no-extend-native': ['error', { exceptions: ['Object', 'String'] }],
        'new-cap': 'off',
        'no-restricted-properties': [
            2,
            {
                object: 'disallowedObjectName',
                property: 'disallowedPropertyName'
            }
        ],
        'react-native/no-raw-text': 0,
        'react/no-did-update-set-state': [0, 'disallow-in-func'],
        'react/jsx-no-bind': [
            2,
            {
                ignoreDOMComponents: true,
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowFunctions: true,
                allowBind: true
            }
        ],
        'react-native/split-platform-components': [
            2,
            {
                androidPathRegex: '\\.(js|jsx|ts|tsx)$',
                iosPathRegex: '\\.(js|jsx|ts|tsx)$'
            }
        ],
        'react/no-unused-prop-types': [0],
        'class-methods-use-this': 'off',
        complexity: 'off'
    },
    settings: {
        'import/resolver': {
            'babel-module': {}
        }
    },
    plugins: [],
    globals: {
        _: 'readonly'
    }
};
