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
  render() {
    return <div></div>
  }
}

export default Navigator;
