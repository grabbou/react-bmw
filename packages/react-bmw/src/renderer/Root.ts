import BaseElement from "./BaseElement";

const SCHEMA_VERSION = '1.3.0';

class Root extends BaseElement<{}> {
  toJSON() {
    const containers = {};

    for (const children of this.children) {
      containers[children.id] = children.toJSON();
    }

    return {
      schemaVersion: '1.3.0',
      containers,
    };
  }
}

export default Root;
