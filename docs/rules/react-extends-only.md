# Prevent extending classes besides React.Component and React.PureComponent. (react-extends-onlyrename)

Javascript is a prototypal inheritance language, but with ES6 it now has
classes. Classes are mostly syntactic sugar, but React has taken to using them
when creating components and as of React 15.5.0, they've moved
`React.createClass` it into it's own package, presumably to put more work and
optimizations behind the ES6 class syntax.

So, it's time to move over to `class Item extends Component`! However,
Javascript is still a prototypal inheritance language and we'd like to stick
with composition over inheritance. This rule will flag any cases where you've
extended something other than one of React's `Component` or `PureComponent`
classes.

## Rule Details

This rule aims to prevent extending classes other than `[React.]Component` and
`[React.]PureComponent`.

Examples of **incorrect** code for this rule:

```js
class Triangle extends Shape {}
```

Examples of **correct** code for this rule:

```js
class Triangle {}
class App extends Component {}
class App extends React.Component {}
class App extends PureComponent {}
class App extends React.PureComponent {}
```

## When Not To Use It

Dan Abramov wrote a [great article][classes] about using classes with Javascript
and even he leaves in some leniency for inheritance, but points out that things
can quickly devolve. My point is, feel free to skip it from time to time, but
try not to.

## Further Reading

- [How to Use Classes and Sleep at Night by Dan Abramov][classes]

[classes]: https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4 "How to Use Classes and Sleep at Night"
