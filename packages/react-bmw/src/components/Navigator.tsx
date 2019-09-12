import React from 'react';

type Props = {
  children: JSX.Element[];
  activeScene: JSX.Element;
};

class Navigator extends React.Component<Props> {
  render() {
    return this.props.children;
  }
}

export default Navigator;
