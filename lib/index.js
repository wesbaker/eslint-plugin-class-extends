/**
 * @fileoverview ESLint rule to prevent extending classes.
 * @author Wes Baker
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["class-extends"],
      parserOptions: { ecmaVersion: 6 },
      rules: { "class-extends/react-extends-only": 2 }
    }
  }
};
