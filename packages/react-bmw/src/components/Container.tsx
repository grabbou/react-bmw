import React from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element
}

class Container extends React.Component<Props> {
  render() {
    return (
      <container id={1}>
        {this.props.children}
      </container>
    );
  }
}

export default Container;
