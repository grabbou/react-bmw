import React from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element
}

class Body extends React.Component<Props> {
  render() {
    return (
      <layoutGroup name="List">
        {this.props.children}
      </layoutGroup>
    );
  }
}

export default Body;
