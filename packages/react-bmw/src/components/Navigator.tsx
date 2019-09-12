import React from 'react';

type Props = {
  scenes: (() => JSX.Element)[];
  activeScene: JSX.Element;
};

class Navigator extends React.Component<Props> {
  render() {
    // @todo render all if "server side"
    return this.props.activeScene;
  }
}

export default Navigator;
