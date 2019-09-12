import React from 'react';

type Props = {
  children: string;
};

class Text extends React.Component<Props> {
  render() {
    return this.props.children;
  }
}

export default Text;
