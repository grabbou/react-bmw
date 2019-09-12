import React from 'react';

type Props = {
  children: string;
  focusable?: boolean;
};

class Text extends React.Component<Props> {
  render() {
    return (
      <component type="label" focusable={this.props.focusable || false}>
        {this.props.children}
      </component>
    );
  }
}

export default Text;
