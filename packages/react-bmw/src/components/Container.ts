import React from 'react';

type Props = {
  id: number;
  children: JSX.Element[] | JSX.Element
}

class Scene extends React.Component<Props> {
  render() {
    return this.props.children;
  }
}

export default Scene;
