import React, { ReactNode } from "react";

import { getIdFromFiber, ReactInstance } from "../renderer/fiberUtils";
import UIManager from "../native/UIManager";

export type Route = {
  navigate: (scene: Scene) => void;
};

type Scene = React.ReactType;

type Props = {
  scenes: Scene[];
  activeScene: Scene;
};

class Navigator extends React.Component<Props> {
  scenes = this.props.scenes.map(() => React.createRef<ReactInstance>());

  componentDidMount() {
    const idx = this.props.scenes.indexOf(this.props.activeScene);
    const id = getIdFromFiber(this.scenes[idx].current);

    UIManager.showInitialScreen(id);
  }

  navigate = (screen: Scene) => {
    const idx = this.props.scenes.indexOf(screen);
    const id = getIdFromFiber(this.scenes[idx].current);

    UIManager.show(id);
  };

  render() {
    return this.props.scenes.map((SceneComponent, idx) => (
      <SceneComponent
        key={idx}
        ref={this.scenes[idx]}
        navigate={this.navigate}
      />
    ));
  }
}

export default Navigator;
