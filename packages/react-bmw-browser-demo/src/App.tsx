import React, { useState } from "react";
import { Text, Navigator, Button, Scene, Body } from "react-bmw";

export default () => {
  const MainScene = () => (
    <Scene>
      <Body>
        <Text>Hello Sir,</Text>
        <Text>How are you enjoying your M5 today?</Text>
        <Button>Turn on donouts mode</Button>
      </Body>
    </Scene>
  );

  const SettingsScene = () => (
    <Scene>
      <Body>
        <Text>Settings screen</Text>
        <Text>Activate insane mode</Text>
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
