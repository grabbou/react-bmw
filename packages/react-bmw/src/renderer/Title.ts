import builder from 'xmlbuilder';

import BaseElement from './BaseElement';
import IXMLSerialziable from './IXMLSerializable';
import IJSONSerialziable from './IJSONSerializable';

type NativeProps = {
  children: string;
};

/**
 * Native component that corresponds to a title component
 */
class Title extends BaseElement<NativeProps> implements IXMLSerialziable, IJSONSerialziable {
  constructor(props: NativeProps) {
    super(props);
  }

  toXML(parent: builder.XMLElement) {
    const element = parent
      .ele('component')
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
