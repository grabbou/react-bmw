import builder from "xmlbuilder";

import BaseElement from "./BaseElement";
import IXMLSerialziable from "./IXMLSerializable";
import IJSONSerialziable from "./IJSONSerializable";

class Button extends BaseElement<{}>
  implements IXMLSerialziable, IJSONSerialziable {
  toXML(el: builder.XMLElement) {
    const element = el
      .ele("component")
      .att("id", this.id)
      .att("type", "label");

    return element;
  }

  toJSON() {
    return {
      type: "label",
      name: this.name
    };
  }
}

export default Button;
