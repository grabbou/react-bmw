import Reconciler from 'react-reconciler';

import BaseElement from './BaseElement';
import Label from './Label';
import Title from './Title';
import State from './State';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      container: any;
      component: any;
    }
  }
}

const rootHostContext = {};
const childHostContext = {};

// @ts-ignore
// @todo FIX THE TYPES!!
const Renderer = Reconciler({
  getRootHostContext: function() {
    return rootHostContext;
  },
  getChildHostContext: function() {
    return childHostContext;
  },
  shouldSetTextContent: function(...args) {
    console.log('shouldSetTextContent', ...args);
    return false;
  },
  createTextInstance: function(text) {
    return Text;
  },
  createInstance: function(type, props: any & { type: string }) {
    switch (type) {
      case 'container': {
        return new State(props);
      }
      case 'component': {
        if (props.type === 'label') {
          return new Label(props);
        }
        if (props.type === 'title') {
          return new Title(props);
        }
        throw new Error(`Unsupported component ${type}`);
      }
      default:
        throw new Error(`Unsupported component ${type}`);
    }
  },
  appendInitialChild: function(
    parent: BaseElement<any>,
    child: BaseElement<any>
  ) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: function(...args) {
    console.log('finalizeInitialChildren', ...args);
    return false;
  },
  appendChildToContainer: () => {},
  appendChild: () => {},
  prepareForCommit: function(...args) {
    console.log('prepareForCommit', ...args);
  },
  resetAfterCommit: function(...args) {
    console.log('resetAfterCommit', ...args);
  },
  supportsMutation: true,
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
