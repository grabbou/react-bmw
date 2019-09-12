import React from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element
}

class Container extends React.Component<Props> {
  render() {
    return (
      <container type="state">
        {this.props.children}
      </container>
    );
  }
}

export default Container;
