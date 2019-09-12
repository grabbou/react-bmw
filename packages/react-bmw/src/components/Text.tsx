import React from 'react';

type Props = {
  children: string;
  focusable?: boolean;
};

class Text extends React.Component<Props> {
  render() {
    return (
      <component id="3" type="label" focusable={this.props.focusable}>

      </component>
    )
  }
}

export default Text;
