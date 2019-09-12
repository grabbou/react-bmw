import builder from 'xmlbuilder';

import BaseElement from './BaseElement';

type NativeProps = {
  children: string;
};

/**
 * Native component that corresponds to a title component
 */
class Title extends BaseElement<NativeProps> {
  constructor(props: NativeProps) {
    super(props);
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

export default Title;
