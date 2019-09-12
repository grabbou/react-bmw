import Reconciler from "react-reconciler";
import fs from "fs";
import path from "path";

import BaseElement from "./BaseElement";
import Label from "./Label";
import Title from "./Title";
import Button from "./Button";
import State from "./State";
import Root from "./Root";
import LayoutGroup from "./LayoutGroup";

const generatedFilesDir = path.join(process.cwd(), "uiDescriptionID7");

const xmlFileName = path.join(generatedFilesDir, "application.xml");
const jsonFileName = path.join(generatedFilesDir, "uiDescription.json");

declare global {
  namespace JSX {
    interface IntrinsicElements {
      container: any;
      component: any;
      layoutGroup: any;
    }
  }
}

const NOOP = () => {};

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
  shouldSetTextContent: function() {
    return false;
  },
  createTextInstance: function(text) {
    return text;
  },
  createInstance: function(type, props: any & { type: string }) {
    switch (type) {
      case "container": {
        return new State(props);
      }
      case "layoutGroup": {
        return new LayoutGroup(props);
      }
      case "component": {
        if (props.type === "label") {
          return new Label(props);
        }
        if (props.type === "button") {
          return new Button(props);
        }
        if (props.type === "title") {
          return new Title(props);
        }
        throw new Error(`Unsupported component ${type}`);
      }
      default:
        throw new Error(`Unsupported component: ${type}`);
    }
  },
  appendInitialChild: function(
    parent: BaseElement<any>,
    child: BaseElement<any>
  ) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: function() {
    return false;
  },
  appendChildToContainer: (
    parent: BaseElement<any>,
    child: BaseElement<any>
  ) => {
    parent.appendChild(child);
  },
  appendChild: NOOP,
  prepareForCommit: NOOP,
  resetAfterCommit: function(root: Root) {
    if (!fs.existsSync(generatedFilesDir)) {
      fs.mkdirSync(generatedFilesDir);
    }
    fs.unlink(xmlFileName, () => {
      fs.appendFile(xmlFileName, root.toXML(), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The XML file was saved in!", xmlFileName);
      });
      fs.appendFile(jsonFileName, JSON.stringify(root.toJSON()), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The JSON file was saved in!", jsonFileName);
      });
    });
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
    root = Renderer.createContainer(new Root(entryPointId), false);
  }
  Renderer.updateContainer(reactElement, root, null, callback);
};
