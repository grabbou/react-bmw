import React from 'react';

type Props = {
  children: string;
  focusable?: boolean;
};

class Text extends React.Component<Props> {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}

export default Text;
