import React from 'react';
import Reconciler from 'react-reconciler';

const rootHostContext = {};
const childHostContext = {};

// @ts-ignore
// @todo FIX THE TYPES!!
const Renderer = Reconciler({
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
    return null;
  },
  createTextInstance: (text, rootContainerInstance, hostContext, internalInstanceHandle) => {
    return null;
  },
  appendInitialChild: (parent, child) => {
    // parent.addChildView(child);
  },
  appendChild(parent, child) {
    // parent.addChildView(child);
  },
  finalizeInitialChildren(
    parentInstance,
    type,
    props,
    rootContainerInstance,
    hostContext,
  ) {
    return false;
  },
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    // parent.setContentView(child);
  },
  prepareUpdate(yueElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(yueElement, updatePayload, type, oldProps, newProps) {},
  commitTextUpdate(textInstance, oldText, newText) {},
  removeChild(parentInstance, child) {}
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

  return Renderer.getPublicRootInstance();
};
