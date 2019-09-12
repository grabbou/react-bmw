import builder from 'xmlbuilder';

import BaseElement from './BaseElement';

type NativeProps = {
  children: BaseElement<any>;
  OptionComponents: string;
};

enum Widget {
  LT_Wide = 'LT_State_Wide',
}

class Label extends BaseElement<NativeProps> {
  constructor(props: NativeProps) {
    super(props);
  }

  toXML() {
    const element = builder
      .create('container')
      .att('id', this.id)
      .att('widget', Widget.LT_Wide)
      .att('type', 'state');

    element
      .ele('property')
      .att('id', 16)
      .att('value', 2);
    return element;
  }

  toJSON() {
    const { children, OptionComponents } = this.props;
    return {
      type: 'state',
      name: this.name,
      properties: {
        OptionComponents: {
          value: OptionComponents,
          type: 'Text',
        },
      },
      components: Array.isArray(children)
        ? children.map(el => el.toJSON())
        : [children],
    };
  }
}

export default Label;
