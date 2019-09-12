/**
 * A HelloWorld app
 */

import React from 'react';
import { render, Text, Container, State } from 'react-bmw';

class MainApplication extends State {
  render() {
    return (
      <Container>
        <Text>Welcome to BMW!</Text>
      </Container>
    )
  }
}

render(MainApplication, '89065040-ce62-11e9-b5b0-959cc45744a0')
