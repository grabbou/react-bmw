import builder from "xmlbuilder";

import BaseElement from "./BaseElement";
import IXMLSerialziable from "./IXMLSerializable";
import IJSONSerialziable from "./IJSONSerializable";

class Button extends BaseElement<{}>
  implements IXMLSerialziable, IJSONSerialziable {
  toXML(el: builder.XMLElement) {
    return el
      .ele("component")
      .att("id", this.id)
      .att("type", "button");
  }

  toJSON() {
    return {
      type: "button",
      name: this.name,
      rows: [
        {
          Text: {
            value: this.children[0],
            type: "Text"
          }
        }
      ]
    };
  }
}

export default Button;
