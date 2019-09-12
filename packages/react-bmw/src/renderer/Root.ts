import builder from 'xmlbuilder';

import BaseElement from "./BaseElement";

const SCHEMA_VERSION = '1.3.0';

class Root extends BaseElement<{}> {
  toJSON() {
    const containers = {};

    for (const child of this.children) {
      containers[child.id] = child.toJSON();
    }

    return {
      schemaVersion: '1.3.0',
      containers,
    };
  }

  toXML() {
    const element = builder
      .create('application');

    for (const child of this.children) {
      child.toXML(element);
    }
    
    return element.end({ pretty: true });
  }
}

export default Root;
