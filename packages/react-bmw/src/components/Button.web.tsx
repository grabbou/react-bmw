import React from "react";

type Props = {
  children: string;
  onPress?: () => void;
};

/**
 * Button component
 */
class Button extends React.Component<Props> {
  render() {
    return (
      <button onClick={this.props.onPress} type="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
