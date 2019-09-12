import React from "react";

type Props = {
  children: string;
};

class Button extends React.Component<Props> {
  render() {
    return <component type="button">{this.props.children}</component>;
  }
}

export default Button;
