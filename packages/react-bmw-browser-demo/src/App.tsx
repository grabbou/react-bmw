import React, { useState } from 'react';
import { Text, Navigator, Container } from 'react-bmw';

export default () => {
  const MainScene = () => (
    <Container>
      <Text>Hello BMW!</Text>
    </Container>
  );

  const SettingsScene = () => (
    <Container>
      <Text>Settings</Text>
    </Container>
  );

  const [scene] = useState(MainScene);

  return (
    <Navigator scenes={[MainScene, SettingsScene]} activeScene={scene} />
  );
};
