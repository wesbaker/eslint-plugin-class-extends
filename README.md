# eslint-plugin-class-extends

ESLint rule to prevent extending classes.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-class-extends`:

```
$ npm install eslint-plugin-class-extends --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-class-extends` globally.

## Usage

Add `class-extends` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["class-extends"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "class-extends/react-extends-only": 2
  }
}
```

## Recommended

This plugin exports a `recommended` configuration that includes the one rule to
prevent extending classes other than `[React.]Component` and
`[React.]PureComponent`.

To enable this configuration use the `extends` property in your `.eslintrc`
config file:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:class-extends/recommended"
  ]
}
```

## Supported Rules

- [react-extends-only](docs/rules/react-extends-only.md)
