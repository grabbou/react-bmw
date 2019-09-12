import React from "react";

import { getIdFromFiber, ReactInstance } from "../renderer/fiberUtils";
import UIManager from "../native/UIManager";

type Props = {
  children: string;
  onPress?: () => void;
};

/**
 * Button component
 */
class Button extends React.Component<Props> {
  ref = React.createRef<ReactInstance>();

  componentDidMount() {
    if (!this.ref.current) {
      return;
    }

    if (typeof this.props.onPress === "function") {
      const id = getIdFromFiber(this.ref.current);
      UIManager.attachListenerToButton(id, this.props.onPress);
    }
  }

  render() {
    return (
      <component ref={this.ref} type="button">
        {this.props.children}
      </component>
    );
  }
}

export default Button;
