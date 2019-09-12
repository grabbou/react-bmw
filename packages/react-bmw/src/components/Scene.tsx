import React from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element
}

class Scene extends React.Component<Props> {
  render() {
    return (
      <container type="state">
        {this.props.children}
      </container>
    );
  }
}

export default Scene;
