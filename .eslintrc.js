module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'object-curly-spacing': [
            'off'
        ],
        'space-before-function-paren': [
            'off'
        ],
        '@typescript-eslint/array-type': [
            'error'
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'enumMember',
                format: ['PascalCase']
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I']
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase']
            },
            {
                selector: 'property',
                modifiers: ['static'],
                format: ['UPPER_CASE']
            }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        semi: [
            'error',
            'always'
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {allowTemplateLiterals: true}
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: {
                    parameters: 'first'
                },
                FunctionExpression: {
                    parameters: 'first'
                }
            }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ]
    }
};
