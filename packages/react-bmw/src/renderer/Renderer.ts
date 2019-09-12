import React from 'react';
import Reconciler from 'react-reconciler';

import ContainerNode from './ContainerNode';

const rootHostContext = {};
const childHostContext = {};

// @ts-ignore
// @todo FIX THE TYPES!!
const Renderer = Reconciler({
  getRootHostContext: function(...args) {
    console.log('getRootHostContext', ...args)
  },
  getChildHostContext: function(...args) {
    console.log('getChildHostContext', ...args)
  },
  shouldSetTextContent: function(...args) {
    console.log('shouldSetTextContent', ...args);
    return false;
  },
  createTextInstance: function(...args) {
    console.log('createTextInstance', ...args)
  },
  createInstance: function(type, props) {
    switch (type) {
      case 'container': {
        return new ContainerNode(props);
      }
      default:
        throw new Error(`Unsupported component ${type}`);
    }
  },
  appendInitialChild: function(...args) {
    console.log('appendInitialChild', ...args)
  },
  finalizeInitialChildren: function(...args) {
    console.log('finalizeInitialChildren', ...args)
    return false;
  },
  appendChildToContainer: () => {

  },
  appendChild: () => {

  },
  prepareForCommit: function(...args) {
    console.log('prepareForCommit', ...args)
  },
  resetAfterCommit: function(...args) {
    console.log('resetAfterCommit', ...args)
  },
  supportsMutation: true
});

let root: Reconciler.FiberRoot;

export default (
  reactElement: JSX.Element,
  entryPointId: string,
  callback?: () => void
) => {
  if (!root) {
    root = Renderer.createContainer(entryPointId, false);
  }

  Renderer.updateContainer(reactElement, root, null, callback);

  return Renderer.getPublicRootInstance(root);
};
