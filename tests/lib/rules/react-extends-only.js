/**
 * @fileoverview Prevent extending classes besides React.Component and React.PureComponent.
 * @author Wes Baker
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/react-extends-only"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("react-extends-only", rule, {
  valid: [
    { code: "class Triangle{}", parserOptions: { ecmaVersion: 6 } },
    {
      code: "class Triangle extends React.Component {}",
      parserOptions: { ecmaVersion: 6 }
    },
    {
      code: "class Triangle extends Component {}",
      parserOptions: { ecmaVersion: 6 }
    },
    {
      code: "class Triangle extends React.PureComponent {}",
      parserOptions: { ecmaVersion: 6 }
    },
    {
      code: "class Triangle extends PureComponent {}",
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: "class Triangle extends Shape {}",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Do not extend classes other than [React.]Component and [React.]PureComponent.",
          type: "ClassDeclaration"
        }
      ]
    }
  ]
});
