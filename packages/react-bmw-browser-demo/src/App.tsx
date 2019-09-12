import React, { forwardRef } from "react";
import { Text, Navigator, Button, Scene, Body } from "react-bmw";

export default () => {
  const MainScene = forwardRef<Scene>((_, ref) => (
    <Scene ref={ref}>
      <Body>
        <Text>Hello Sir,</Text>
        <Text>How are you enjoying your M5 today?</Text>
        <Button>Turn on donouts mode</Button>
      </Body>
    </Scene>
  ));

  const SettingsScene = forwardRef<Scene>((_, ref) => (
    <Scene ref={ref}>
      <Body>
        <Text>Settings screen</Text>
        <Text>Activate insane mode</Text>
      </Body>
    </Scene>
  ));

  return (
    <Navigator scenes={[MainScene, SettingsScene]} activeScene={MainScene} />
  );
};
