import IOAPInterface from './IOAPInterface';
import renderApplication from '../renderer/Renderer';

let OnlineAppRuntime: new () => IOAPInterface;

try {
  OnlineAppRuntime = require('./OnlineAppRuntime').default;
} catch (e) {
  OnlineAppRuntime = require('./OfflineAppRuntime').default;
}

/**
 * UIManager
 */
class UIManager {
  oap: IOAPInterface;
  entryPointId: string;

  constructor(oap: IOAPInterface) {
    this.oap = oap;
  }

  show(stateId: number) {
    this.oap.openState(stateId);
  }

  showInitialScreen(stateId: number) {
    this.oap.showInitialScreen(this.entryPointId, stateId);
  }

  attachListenerToButton(id: number, cb: () => void) {
    this.oap.attachListenerToButton(id, cb);
  }

  runApplication(Component: JSX.Element, entryPointId: string) {
    this.entryPointId = entryPointId;
    renderApplication(Component, entryPointId);
  }
}

export default new UIManager(new OnlineAppRuntime());
