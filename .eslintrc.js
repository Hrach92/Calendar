const ERROR = "error";
const WARN = "warn";
const OFF = "off";

module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",
  plugins: [
    "import",
    "@typescript-eslint",
    "prettier",
    "react",
    "react-hooks",
    "eslint-plugin-no-inline-styles",
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    impliedStrict: true,
  },
  rules: {
    /* ************************************* */
    /* ************************************* */
    /* *** SHOULD ACCEPT UNCONDITIONALLY *** */
    /* ************************************* */
    /* ************************************* */

    "no-inline-styles/no-inline-styles": 2,

    "prettier/prettier": ERROR,

    /**
     * Semicolons at the end of the statements
     * Disabled due to use of prettier
     */
    semi: OFF,

    /**
     * Max length of every line and tabulation settings {@link https://eslint.org/docs/rules/max-len}
     * Disabled due to use of prettier
     */
    "max-len": OFF,

    /**
     * Break named imports, if there's more than one {@link https://eslint.org/docs/rules/object-curly-newline}
     * Disabled due to conflicts with prettier
     */
    "object-curly-newline": OFF,

    /**
     * Spaces around curly braces in objects {@link https://eslint.org/docs/rules/curly}
     * Disabled due to use of prettier
     */
    curly: OFF,

    /**
     * Ban call of object prototype methods directly {@link https://eslint.org/docs/rules/no-prototype-builtins}
     * Useful, but not applicable for us
     */
    "no-prototype-builtins": OFF,

    /**
     * Disallows the use of variables before they are defined {@link https://eslint.org/docs/rules/no-use-before-define}
     * Emits wrong errors {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use}
     */
    "no-use-before-define": OFF,

    /**
     * Enforces return statements in callbacks of array's methods {@link https://eslint.org/docs/rules/array-callback-return}
     * There is no need of using array methods if no return value provided
     */
    "array-callback-return": ERROR,

    /**
     * Requires 'for in' loops to include an 'if' statement {@link https://eslint.org/docs/rules/guard-for-in}
     * Could be useful, but most of the time is annoying
     */
    "guard-for-in": OFF,

    /**
     * Disallows bitwise operators {@link https://eslint.org/docs/rules/no-bitwise}
     * We are using bitwise operators
     */
    "no-bitwise": OFF,

    /**
     * Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md}
     * Doesn't work properly
     */
    "import/no-unresolved": OFF,

    /**
     * Ensure consistent use of file extension within the import path {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md}
     * Doesn't work properly
     */
    "import/extensions": [
      "error",
      "ignorePackages",
      { "": "never", js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],

    /**
     * Ensures that there is no resolvable path back to this module via its dependencies {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md}
     */
    "import/no-cycle": ERROR,

    /** ****************************** **/
    /** ****************************** **/
    /** ******* SHOULD DISCUSS ******* **/
    /** ****************************** **/
    /** ****************************** **/
    /** Enforces camelcase naming convention {@link https://eslint.org/docs/rules/camelcase} */
    camelcase: [WARN, { ignoreImports: true, allow: ["^UNSAFE_"] }],

    /** Enforces the consistent use of the radix argument when using 'parseInt()' {@link https://eslint.org/docs/rules/radix} */
    radix: WARN,

    /** Enforces dot notation whenever possible {@link https://eslint.org/docs/rules/dot-notation}  */
    "dot-notation": OFF,

    /** Enforces a maximum number of classes per file {@link https://eslint.org/docs/rules/max-classes-per-file} */
    "max-classes-per-file": [ERROR, 1],

    /** Requires a default case in switch statements {@link https://eslint.org/docs/rules/default-case} */
    "default-case": OFF,

    /** Requires variable declarations to be at the top of their scope {@link https://eslint.org/docs/rules/vars-on-top} */
    "vars-on-top": OFF,

    /** Requires or disallows named function expressions {@link https://eslint.org/docs/rules/func-names} */
    "func-names": OFF,

    /** Enforces consistent spacing after the '//' or '/*' in a comment {@link https://eslint.org/docs/rules/spaced-comment} */
    "spaced-comment": [
      WARN,
      "always",
      {
        line: {
          markers: ["/", "**"],
          exceptions: ["-", "+"],
        },
        block: {
          markers: ["!", "**"],
          exceptions: ["*"],
          balanced: true,
        },
      },
    ],

    /** Requires braces in arrow function bodies {@link https://eslint.org/docs/rules/arrow-body-style} */
    "arrow-body-style": WARN,

    /** Requires 'return' statements to either always or never specify values {@link https://eslint.org/docs/rules/consistent-return} */
    "consistent-return": OFF,

    /** Requires or disallows assignment operator shorthand where possible {@link https://eslint.org/docs/rules/operator-assignment} */
    "operator-assignment": [WARN, "always"],

    /** Requires or disallows method and property shorthand syntax for object literals {@link https://eslint.org/docs/rules/object-shorthand} */
    "object-shorthand": [ERROR, "properties", { avoidQuotes: true }],

    /** Enforces default clauses in switch statements to be last {@link https://eslint.org/docs/rules/default-case-last} */
    "default-case-last": OFF,

    /** Enforces default parameters to be last {@link https://eslint.org/docs/rules/default-param-last} */
    "default-param-last": ERROR,

    /** Enforces that class methods utilize 'this' {@link https://eslint.org/docs/rules/class-methods-use-this} */
    "class-methods-use-this": OFF,

    /** Prefer the use of rest operator for arguments, rather than arguments magic var {@link https://eslint.org/docs/rules/prefer-rest-params} */
    "prefer-rest-params": ERROR,

    /** Requires const declarations for variables that are never reassigned after declared {@link https://eslint.org/docs/rules/prefer-const} */
    "prefer-const": ERROR,

    /** Requires destructuring from arrays and/or objects {@link https://eslint.org/docs/rules/prefer-destructuring} */
    "prefer-destructuring": OFF,

    /** Prefer spread operator over 'apply' method {@link https://eslint.org/docs/rules/prefer-spread} */
    "prefer-spread": WARN,

    /** Requires using arrow functions for callbacks {@link https://eslint.org/docs/rules/prefer-arrow-callback} */
    "prefer-arrow-callback": ERROR,

    /** Requires using Error objects as Promise rejection reasons {@link https://eslint.org/docs/rules/prefer-promise-reject-errors} */
    "prefer-promise-reject-errors": [WARN, { allowEmptyReject: true }],

    /** Suggests using template literals instead of string concatenation {@link https://eslint.org/docs/rules/prefer-template} */
    "prefer-template": WARN,

    /** Requires 'let' or 'const' instead of 'var' {@link https://eslint.org/docs/rules/no-var} */
    "no-var": WARN,

    /** Disallows unnecessary boolean casts {@link https://eslint.org/docs/rules/no-extra-boolean-cast#no-extra-boolean-cast} */
    "no-extra-boolean-cast": [ERROR, { enforceForLogicalOperands: true }],

    /** Disallows use of the void operator {@link https://eslint.org/docs/rules/no-void} */
    "no-void": OFF,

    /** Disallows empty block statements {@link https://eslint.org/docs/rules/no-empty#no-empty} */
    "no-empty": [ERROR, { allowEmptyCatch: true }],

    /** Disallows the use of console {@link https://eslint.org/docs/rules/no-console} */
    "no-console": [WARN, { allow: ["warn", "error"] }],

    /** Disallows continue statements {@link https://eslint.org/docs/rules/no-continue} */
    "no-continue": OFF,

    /** Disallows the use of 'alert', 'confirm', and 'prompt' {@link https://eslint.org/docs/rules/no-alert} */
    "no-alert": WARN,

    /** Disallows unused expressions {@link https://eslint.org/docs/rules/no-unused-expressions} */
    "no-unused-expressions": [
      ERROR,
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
        enforceForJSX: true,
      },
    ],

    /** Disallows 'if' statements as the only statement in 'else' blocks {@link https://eslint.org/docs/rules/no-lonely-if} */
    "no-lonely-if": WARN,

    /** Disallows dangling underscores in identifiers {@link https://eslint.org/docs/rules/no-underscore-dangle} */
    "no-underscore-dangle": WARN,

    /** Disallows reassignment of function parameters {@link https://eslint.org/docs/rules/no-param-reassign} */
    "no-param-reassign": [
      ERROR,
      { props: true, ignorePropertyModificationsFor: ["draftState"] },
    ],

    /** Disallows nested ternary expressions {@link https://eslint.org/docs/rules/no-nested-ternary} */
    "no-nested-ternary": WARN,

    /** Disallows lexical declarations in case/default clauses {@link https://eslint.org/docs/rules/no-case-declarations} */
    "no-case-declarations": ERROR,

    /** Disallows unnecessary escape characters {@link https://eslint.org/docs/rules/no-useless-escape} */
    "no-useless-escape": WARN,

    /** Disallows unnecessary concatenation of strings {@link https://eslint.org/docs/rules/no-useless-concat} */
    "no-useless-concat": WARN,

    /** Disallows unnecessary constructors {@link https://eslint.org/docs/rules/no-useless-constructor} */
    "no-useless-constructor": OFF,

    /** Disallows ternary operators when simpler alternatives exist {@link https://eslint.org/docs/rules/no-unneeded-ternary} */
    "no-unneeded-ternary": ERROR,

    /** Disallows 'return' before 'else' {@link https://eslint.org/docs/rules/no-else-return} */
    "no-else-return": [ERROR, { allowElseIf: false }],

    /** Disallows assignment operators in 'return' statements {@link https://eslint.org/docs/rules/no-return-assign} */
    "no-return-assign": [ERROR, "except-parens"],

    /** Disallows unnecessary return await {@link https://eslint.org/docs/rules/no-return-await} */
    "no-return-await": ERROR,

    /** Disallows returning values from Promise executor functions {@link https://eslint.org/docs/rules/no-promise-executor-return} */
    "no-promise-executor-return": OFF,

    /** Disallows specified names in exports {@link https://eslint.org/docs/rules/no-restricted-exports} */
    "no-restricted-exports": OFF,

    /** Disallows the unary operators '++' and '--' {@link https://eslint.org/docs/rules/no-plusplus} */
    "no-plusplus": OFF,

    /** Restricts what can be thrown as an exception {@link https://eslint.org/docs/rules/no-throw-literal} */
    "no-throw-literal": ERROR,

    /** Disallows specified syntax {@link https://eslint.org/docs/rules/no-restricted-syntax} */
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    /** Disallows await inside of loops {@link https://eslint.org/docs/rules/no-await-in-loop} */
    "no-await-in-loop": WARN,

    /** Disallows returning values in constructor {@link https://eslint.org/docs/latest/rules/no-constructor-return} */
    "no-constructor-return": OFF,

    /**
     * Reports use of a default export as a locally named import {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md}
     * Prevents useful reexporting syntax {@example `export { default } './module'`}
     */
    "import/no-named-default": OFF,

    /**
     * Guarantees default props for optional props {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md}
     * Could be applicable if not for the TS
     */
    "react/require-default-props": OFF,

    /**
     * Forbid the use of certain prop types {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
     * We aren't using prop types
     */
    "react/forbid-prop-types": OFF,

    /**
     * Prevent definitions of unused propTypes {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md}
     * Great help
     */
    "react/no-unused-prop-types": WARN,

    /**
     * Guards components with prop types usage {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
     * We aren't using prop types
     */
    "react/prop-types": OFF,

    /**
     * Prevent missing React when using JSX {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md}
     * Can be turned off since version 17 of react
     */
    "react/react-in-jsx-scope": OFF,

    /**
     * Prevent usage of unknown DOM property {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md}
     * Unnecessary due to use of TS
     */
    "react/no-unknown-property": OFF,

    /**
     * Enforce consistent usage of destructuring assignment of props, state, and context {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md}
     * Mostly the rule is annoying
     */
    "react/destructuring-assignment": OFF,

    /**
     * Prevent usage of unsafe `target='_blank'` {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md}
     * Security measures
     */
    "react/jsx-no-target-blank": ERROR,

    /**
     * Check if anchor has a valid href prop {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md}
     * Disabled to ease HTML writing
     */
    "jsx-a11y/anchor-is-valid": OFF,

    /**
     * Check if controls has correct a11y texts {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md}
     * Disabled to ease HTML writing
     */
    "jsx-a11y/control-has-associated-label": OFF,

    /**
     * Require associated label for inputs {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md}
     */
    "jsx-a11y/label-has-associated-control": OFF,

    /** ****************************** **/
    /** ****************************** **/
    /** ******* SHOULD DISCUSS ******* **/
    /** ****************************** **/
    /** ****************************** **/
    /** Disallows the use of 'Math.pow' in favor of the '**' operator {@link https://eslint.org/docs/rules/prefer-exponentiation-operator} */
    "prefer-exponentiation-operator": WARN,

    /** Enforce a convention in module import order {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md} */
    // 'import/order': [
    //   WARN,
    //   {
    //     groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
    //     pathGroups: [
    //       {
    //         group: 'external',
    //         regex: '[react|redux]',
    //         pattern: '*',
    //         position: 'before',
    //       },
    //       {
    //         group: 'internal',
    //         pattern: '$/**',
    //       },
    //     ],
    //     'newlines-between': 'always',
    //     pathGroupsExcludedImportTypes: ['builtin'],
    //   },
    // ],

    /** Enforces having one or more empty lines after the last top-level import statement or require call {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md} */
    "import/newline-after-import": [ERROR, { count: 1 }],

    /** Preferring default export when nothing else is exporting {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md} */
    "import/prefer-default-export": WARN,

    /** Forbid the use of extraneous packages {@link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md} */
    "import/no-extraneous-dependencies": OFF,

    /** Prevent usage of dangerous JSX properties {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md} */
    "react/no-danger": WARN,

    /** Prevent 'this' from being used in stateless functional components {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md} */
    "react/no-this-in-sfc": ERROR,

    /** Iterators as key prop {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md} */
    "react/no-array-index-key": WARN,

    /** Prevent missing 'displayName' in a React component definition {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md} */
    "react/display-name": WARN,

    /** Enforce state initialization style {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md} */
    "react/state-in-constructor": OFF,

    /** Enforce component methods order {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md} */
    "react/sort-comp": [
      WARN,
      {
        order: [
          "static-methods",
          "lifecycle",
          "everything-else",
          "/^on.+$/",
          "/^render.+$/",
          "render",
        ],
      },
    ],

    /** Enforce boolean attributes notation in JSX {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md} */
    "react/jsx-boolean-value": [WARN, "never"],

    /** Spread operator inside component props {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md} */
    "react/jsx-props-no-spreading": OFF,

    /** Restricts the use of JSX syntax to certain file types {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md} */
    "react/jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"] }],

    /** Prevent usage of 'button' elements without an explicit 'type' attribute {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md} */
    "react/button-has-type": WARN,

    /** Prevent using string references {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md} */
    "react/no-string-refs": WARN,

    /** Prevent using 'this.state' within a 'this.setState' {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md} */
    "react/no-access-state-in-setstate": ERROR,

    /** This option enforces a specific function type for function components {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md} */
    "react/function-component-definition": [
      ERROR,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    /** Prevent declaring unused methods of component class {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md} */
    "react/no-unused-class-component-methods": ERROR,

    /** Prevent definitions of unused state {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md} */
    "react/no-unused-state": WARN,

    /** Disallow unnecessary fragments {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md} */
    "react/jsx-no-useless-fragment": [WARN, { allowExpressions: true }],

    /** Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md} */
    "react/jsx-curly-brace-presence": [
      ERROR,
      { props: "never", children: "never" },
    ],

    /** Checks effect dependencies {@link https://www.npmjs.com/package/eslint-plugin-react-hooks} */
    "react-hooks/exhaustive-deps": WARN,

    /** {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md} */
    "jsx-a11y/no-noninteractive-element-interactions": OFF,

    /** Enforce img alt attribute does not contain the word image, picture, or photo {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md} */
    "jsx-a11y/img-redundant-alt": WARN,

    /** Ensures 'caption' attribute provision for media elements {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md} */
    "jsx-a11y/media-has-caption": WARN,

    /** Ensures elements to become more semantic {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md}} */
    "jsx-a11y/no-static-element-interactions": WARN,

    /** Enforce 'onClick' is accompanied by at least one of the following: 'onKeyUp', 'onKeyDown', 'onKeyPress' {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md} */
    "jsx-a11y/click-events-have-key-events": WARN,

    /** Enforce that autoFocus prop is not used on elements {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md} */
    "jsx-a11y/no-autofocus": OFF,
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        /** Requires using either 'T[]' or 'Array<T>' for arrays {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md} */
        "@typescript-eslint/array-type": [
          ERROR,
          { default: "array-simple", readonly: "array-simple" },
        ],

        /** Disables usage of 'any' type {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md} */
        "@typescript-eslint/no-explicit-any": OFF,

        /** Ban the usage of certain typechecking suppression comments {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md} */
        "@typescript-eslint/ban-ts-comment": [
          ERROR,
          {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
            minimumDescriptionLength: 10,
          },
        ],

        /** Restrict usage of a certain builtin types in TS {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md} */
        "@typescript-eslint/ban-types": WARN,

        /** Disallow the declaration of empty interfaces {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md} */
        "@typescript-eslint/no-empty-interface": [
          ERROR,
          { allowSingleExtends: true },
        ],

        /** Disallow unused variables and TS entities {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md} */
        "@typescript-eslint/no-unused-vars": [
          ERROR,
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
          },
        ],

        /** Disallows empty functions {@link https://eslint.org/docs/rules/no-empty-function} */
        "@typescript-eslint/no-empty-function": OFF,

        /** Disallow aliasing 'this' {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md} */
        "@typescript-eslint/no-this-alias": ERROR,

        /** Disallow the use of variables before they are defined {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md} */
        "@typescript-eslint/no-use-before-define": [
          ERROR,
          {
            functions: false,
            enums: true,
            typedefs: true,
            ignoreTypeReferences: true,
          },
        ],

        /** Disallows the use of require statements except in import statements {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md} */
        "@typescript-eslint/no-var-requires": OFF,

        /** Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md} */
        "@typescript-eslint/no-inferrable-types": ERROR,

        /** Require explicit return and argument types on exported functions' and classes' public class methods {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md} */
        "@typescript-eslint/explicit-module-boundary-types": [
          WARN,
          {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [
              "componentDidMount",
              "componentDidUpdate",
              "shouldComponentUpdate",
              "componentWillUnmount",
              "getSnapshotBeforeUpdate",
              "componentDidCatch",
              "render",
            ],
          },
        ],

        /** Require explicit return types on functions and class methods {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md} */
        "@typescript-eslint/explicit-function-return-type": OFF,

        /** Disallows non-null assertions using the '!' postfix operator {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md} */
        "@typescript-eslint/no-non-null-assertion": WARN,

        /** Requires or disallows an empty line between class members {@link https://typescript-eslint.io/rules/lines-between-class-members/} */
        "@typescript-eslint/lines-between-class-members": [
          WARN,
          "always",
          {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true,
          },
        ],

        "@typescript-eslint/no-shadow": WARN,

        // Disabling JS rules in favor of TS analogues
        "no-shadow": OFF,
        "no-undef": OFF,
        "no-unused-vars": OFF,
        "no-redeclare": OFF,
        "no-dupe-class-members": OFF,
        "lines-between-class-members": OFF,
      },
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        /** Disallows identifiers from shadowing restricted names {@link https://eslint.org/docs/rules/no-shadow-restricted-names} */
        "no-shadow": ERROR,

        /** Disallows the use of undeclared variables {@link https://eslint.org/docs/rules/no-undef} */
        "no-undef": ERROR,

        /** Disallows unused variables {@link https://eslint.org/docs/rules/no-unused-vars} */
        "no-unused-vars": [
          ERROR,
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
          },
        ],

        /** Disallows variable re-declarations {@link https://eslint.org/docs/rules/no-redeclare} */
        "no-redeclare": ERROR,

        /** Requires or disallows an empty line between class members {@link https://eslint.org/docs/rules/lines-between-class-members} */
        "lines-between-class-members": [
          WARN,
          "always",
          { exceptAfterSingleLine: true },
        ],

        // Disabling TS rules for JS files
        "@typescript-eslint/no-explicit-any": OFF,
        "@typescript-eslint/ban-ts-comment": OFF,
        "@typescript-eslint/ban-types": OFF,
        "@typescript-eslint/no-empty-interface": OFF,
        "@typescript-eslint/no-unused-vars": OFF,
        "@typescript-eslint/no-empty-function": OFF,
        "@typescript-eslint/no-this-alias": OFF,
        "@typescript-eslint/no-var-requires": OFF,
        "@typescript-eslint/no-inferrable-types": OFF,
        "@typescript-eslint/explicit-module-boundary-types": OFF,
        "@typescript-eslint/lines-between-class-members": OFF,
        "@typescript-eslint/no-use-before-define": OFF,
      },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    "build/",
    "out/",
    "coverage/",
    "graphql/",
    "public/*js",
  ],
};
