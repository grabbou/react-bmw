import builder from "xmlbuilder";

import BaseElement from "./BaseElement";
import IXMLSerialziable from "./IXMLSerializable";
import IJSONSerialziable from "./IJSONSerializable";

type NativeProps = {
  focusable: boolean;
  children: string;
};

/**
 * Different kinds of widgets that can be rendered by BMW infotainment system.
 *
 * Note to future self: Consider rewriting this into a more expressive
 * layout engine where this is implied automatically and typed as well
 */
enum Widget {
  Multiline_2R1T = "LT_Label_2Row_1TextDyn"
}

/**
 * Native component that corresponds to a label component
 */
class Label extends BaseElement<NativeProps>
  implements IXMLSerialziable, IJSONSerialziable {
  toXML(el: builder.XMLElement) {
    const element = el
      .ele("component")
      .att("id", this.id)
      .att("widget", Widget.Multiline_2R1T)
      .att("type", "label");

    element
      .ele("property")
      .att("id", 3)
      .att("value", this.props.focusable ? 1 : 0);

    return element;
  }

  toJSON() {
    return {
      type: "label",
      name: this.name,
      properties: {
        Focusable: {
          value: this.props.focusable ? 1 : 0,
          type: "UInt"
        }
      },
      rows: [
        {
          Text: {
            value: this.props.children,
            type: "Text"
          }
        }
      ]
    };
  }
}

export default Label;
