import builder from 'xmlbuilder';

import BaseElement from './BaseElement';

type NativeProps = {
  children: BaseElement<any>;
  OptionComponents: string;
};

enum Widget {
  LT_Wide = 'LT_State_Wide',
}

class State extends BaseElement<NativeProps> {
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
    return {
      type: 'state',
      name: this.name,
      properties: {
        OptionComponents: {
          value: this.props.OptionComponents,
          type: 'Text',
        },
      },
      components: this.children.map(el => el.toJSON()),
    };
  }
}

export default State;
