import React, { forwardRef } from "react";
import {
  Text,
  Navigator,
  NavigatorRoute,
  Button,
  Scene,
  Body
} from "react-bmw";

export default () => {
  const MainScene = forwardRef<Scene, NavigatorRoute>(({ navigate }, ref) => (
    <Scene ref={ref}>
      <Body>
        <Text>Hello Sir,</Text>
        <Text>Are you ready to turn on donout mode?</Text>
        <Button onPress={() => navigate(SettingsScene)}>
          Yes, go to settings!
        </Button>
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
