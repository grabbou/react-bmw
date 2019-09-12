import builder from "xmlbuilder";

import BaseElement from "./BaseElement";
import IXMLSerialziable from "./IXMLSerializable";
import IJSONSerialziable from "./IJSONSerializable";

type NativeProps = {
  name: "List" | "Titlebar" | "StateOptions";
};

/**
 * Native component that corresponds to a label component
 */
class LayoutGroup extends BaseElement<NativeProps>
  implements IXMLSerialziable, IJSONSerialziable {
  toXML(el: builder.XMLElement) {
    const element = el
      .ele("layoutGroup")
      .att("id", this.id)
      .att("name", this.props.name);

    for (const children of this.children) {
      children.toXML(element);
    }

    return element;
  }

  toJSON() {
    return this.children.reduce(
      (acc, child) => ({ ...acc, [child.id]: child.toJSON() }),
      {}
    );
  }
}

export default LayoutGroup;
