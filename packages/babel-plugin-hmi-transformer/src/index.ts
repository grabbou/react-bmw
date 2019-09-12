export default function(babel) {
  const { types: t, template } = babel;
  
  const reduceXmlTree = node => {
  if(Array.isArray(node)) {
    return node.map(reduceXmlTree)
  }
	if(node.children) {
      if(Array.isArray(node.children)) {
        return({ [node.name]: reduceXmlTree(node.children) })
      }
      if(node.attr) {
        return({ [node.name]: [node.children, { _attr: node.attr }]})
      }
      return({ [node.name]: node.children })
    }
    return({ [node.name]: {} })
  }

  const strinfigyXmlTree = el => {
    console.group('XML Element', el.name, typeof el.children === "string" ? el.children : "");
    if (el.children) {
      if(Array.isArray(el.children)) {
        el.children.forEach(strinfigyXmlTree);
      }
    }
    console.groupEnd();
  };

  return {
    visitor: {
      Program: {
        enter(path, state) {
          state.xmlRoot = {
            name: "__root__"
          };
        },
        exit(path, state) {
          strinfigyXmlTree(state.xmlRoot);
          console.log(reduceXmlTree(state.xmlRoot))
        }
      },
      Identifier(path, state) {
        if (path.node.name === "render") {
          path.parentPath.traverse({
            ReturnStatement(r) {
              if (t.isJSXElement(r.node.argument)) {
                const xmlElementStack = [state.xmlRoot];

                babel.traverse(
                  r.node,
                  {
                    JSXElement: {
                      enter(jsx) {
                        console.log(jsx)
                        const currentXmlElement = {
                          name: jsx.node.openingElement.name.name
                        };
                        if(jsx.node.children.length === 1){
                          currentXmlElement.children = jsx.node.children[0].value
                        }
                        const attr = jsx.node.openingElement.attributes
                        if(attr) {
                          const formattedAttr = attr.reduce((prev, curr) => {
                            const name = curr.name.name
                            const value = curr.value.value
                            return Object.assign(prev, { [name]: value })
                          }, {})
                          currentXmlElement.attr = formattedAttr
                        }
                        xmlElementStack[xmlElementStack.length - 1].children = (
                          xmlElementStack[xmlElementStack.length - 1].children || []
                        ).concat(currentXmlElement);
                        
                        xmlElementStack.push(currentXmlElement);
                      },
                      exit(jsx) {
                        xmlElementStack.pop();
                      }
                    }
                  },
                  {} // scope
                );
              }
            }
          });
        }
      }
    }
  };
}