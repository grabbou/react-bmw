import builder from 'xmlbuilder';

import BaseElement from './BaseElement';

type NativeProps = {
  children: string;
};

class Label extends BaseElement<NativeProps> {
  constructor(props: NativeProps) {
    super('component', props);
  }

  toXML() {
    const element = builder
      .create('component')
      .att('id', this.id)
      .att('type', 'title');
    return element;
  }

  toJSON() {
    return {
      type: 'title',
      name: this.name,
      rows: [
        {
          Text: {
            value: this.props.children,
            type: 'Text',
          },
        },
      ],
    };
  }
}

export default Label;
