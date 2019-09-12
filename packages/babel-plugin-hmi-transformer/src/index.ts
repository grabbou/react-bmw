// const getReplacers = require('./replace')
// const {looksLike} = require('./helpers')
type Options = {}

export default (babel: any, options: Options) =>
  // {
  // types: t,
  // template,
  // transformFromAst,
  // version
  // },
  {
    return {
      name: 'ast-transform', // optional
      visitor: {
        // Program(path,{file: {opts: fileOpts}}) {},
        // TaggedTemplateExpression(path,{file: {opts: fileOpts}}) {},
        // ImportDeclaration(path,{file: {opts: fileOpts}}) {},
        // CallExpression(path,{file: {opts: fileOpts}}) {},
        Identifier(path) {
          path.node.name = path.node.name
            .split('')
            .reverse()
            .join('')
        },
      },
    }
  }
