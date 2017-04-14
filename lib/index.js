/**
 * @fileoverview ESLint rule to prevent extending classes.
 * @author Wes Baker
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const path = require("path");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: requireIndex(path.join(global.__dirname, "/rules")),
  configs: {
    recommended: {
      plugins: ["class-extends"],
      parserOptions: { ecmaVersion: 6 },
      rules: { "class-extends/react-extends-only": 2 }
    }
  }
};
