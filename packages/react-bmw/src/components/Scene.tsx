import React, { ReactElement } from "react";

type Props = {
  children: ReactElement<Body>;
};

/**
 * Main scene component, accepts certain layout groups to exist within
 */
class Scene extends React.Component<Props> {
  render() {
    return <container type="state">{this.props.children}</container>;
  }
}

export default Scene;
