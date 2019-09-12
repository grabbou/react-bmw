import React, { useState } from 'react';
import { Text, Navigator, Scene, Body } from 'react-bmw';

export default () => {
  const MainScene = () => (
    <Scene>
      <Body>
        <Text>Hello BMW!</Text>
        <Text>How are you?</Text>
      </Body>
    </Scene>
  );

  const SettingsScene = () => (
    <Scene>
       <Body>
        <Text>Hello BMW!</Text>
        <Text>How are you?</Text>
      </Body>
    </Scene>
  );

  const [scene] = useState(MainScene);

  return (
    <Navigator activeScene={scene}>
      <MainScene />
      <SettingsScene />
    </Navigator>
  );
};
