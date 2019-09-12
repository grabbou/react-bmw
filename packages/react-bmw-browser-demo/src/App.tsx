/**
 * A HelloWorld app
 */

import React from 'react';
import { Text, Container } from 'react-bmw';

class MainApplication extends React.Component {
  render() {
    return (
      <Container __id={1}>
        <Text __id={2}>Welcome to BMW!</Text>
      </Container>
    )
  }
}

export default MainApplication;
