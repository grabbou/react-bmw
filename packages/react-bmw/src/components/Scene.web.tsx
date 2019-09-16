import React, { ReactElement } from "react";

type Props = {
  children: ReactElement<Body>;
};

/**
 * Main scene component, accepts certain layout groups to exist within
 */
class Scene extends React.Component<Props> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Scene;
