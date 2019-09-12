import React from 'react';

type Props = {
  __id: number;
  children: JSX.Element[] | JSX.Element
}

class Container extends React.Component<Props> {
  render() {
    return this.props.children;
  }
}

export default Container;
