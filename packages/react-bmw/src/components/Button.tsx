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
  componentDidMount() {
    if (typeof this.props.onPress === "function") {
      const id = getIdFromFiber(this.ref.current);
      UIManager.attachListenerToButton(id, this.props.onPress);
    }
  }

  ref = React.createRef<ReactInstance>();

  render() {
    return (
      <component ref={this.ref} type="button">
        {this.props.children}
      </component>
    );
  }
}

export default Button;
