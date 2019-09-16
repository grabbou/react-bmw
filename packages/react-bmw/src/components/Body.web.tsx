import React from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

class Body extends React.Component<Props> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Body;
