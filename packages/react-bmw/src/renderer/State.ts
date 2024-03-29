import builder from "xmlbuilder";

import BaseElement from "./BaseElement";
import IXMLSerialziable from "./IXMLSerializable";
import IJSONSerialziable from "./IJSONSerializable";

type NativeProps = {
  OptionComponents: string;
};

enum Widget {
  LT_Wide = "LT_State_Wide"
}

class State extends BaseElement<NativeProps>
  implements IXMLSerialziable, IJSONSerialziable {
  constructor(props: NativeProps) {
    super(props);
  }

  toXML(parent: builder.XMLElement) {
    const element = parent
      .ele("container")
      .att("id", this.id)
      .att("widget", Widget.LT_Wide)
      .att("type", "state");

    for (const child of this.children) {
      child.toXML(element);
    }

    return element;
  }

  toJSON() {
    return {
      type: "state",
      name: this.name,
      properties: {
        OptionComponents: {
          value: this.props.OptionComponents,
          type: "Text"
        }
      },
      components: this.children.reduce(
        (acc, child) => ({ ...acc, ...child.toJSON() }),
        {}
      )
    };
  }
}

export default State;
