import uuid from 'uuid';
import builder from 'xmlbuilder';

import BaseElement from "./BaseElement";

type NativeProps = {
  focused: boolean;
  children: string;
};

class Label extends BaseElement<NativeProps> {
  toXML() {
    const element = builder.create('component')
      .att('id', this.id)
      .att('type', 'label');

    element.ele('property')
      .att('id', 3)
      .att('value', 0);

    return element;
  }

  toJSON() {
    return {
      type: 'label',
      name: this.name,
      properties: {
        'Focusable': {
          value: Number(this.props.focused),
          type: 'UInt',
        }
      },
      rows: [
        {
          'Text': {
            value: this.props.children,
            type: 'Text'
          }
        }
      ]
    };
  }
}

export default Label;
