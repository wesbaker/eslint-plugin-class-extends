/**
 * @fileoverview Prevent extending classes besides React.Component and React.PureComponent.
 * @author Wes Baker
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Prevent extending classes besides React.Component and React.PureComponent.",
      category: "Best Practices",
      recommended: true
    },
    schema: []
  },

  create: function(context) {
    const isComponent = name =>
      name === "Component" || name === "PureComponent";

    const invalidExtends = node => {
      if (!node.superClass) return false;
      if (node.superClass.name && isComponent(node.superClass.name)) {
        return false;
      }
      if (
        node.superClass.object &&
        node.superClass.property &&
        node.superClass.object.name === "React" &&
        isComponent(node.superClass.property.name)
      ) {
        return false;
      }
      return true;
    };

    return {
      ClassDeclaration: function(node) {
        if (invalidExtends(node)) {
          context.report(
            node,
            "Do not extend classes other than [React.]Component and [React.]PureComponent."
          );
        }
      }
    };
  }
};
