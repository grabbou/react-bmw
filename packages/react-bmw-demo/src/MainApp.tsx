/**
 * A HelloWorld app
 */

import React from 'react';
import ReactBMW, { Text, Container } from 'react-bmw';

class MainApplication extends React.Component {
  render() {
    return (
      <Container __id={1}>
        <Text __id={2}>Welcome to BMW!</Text>
      </Container>
    )
  }
}

ReactBMW.render(<MainApplication />, '89065040-ce62-11e9-b5b0-959cc45744a0');
