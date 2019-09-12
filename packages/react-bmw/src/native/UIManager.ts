import IOAPInterface from "./IOAPInterface";
import OfflineAppRuntime from "./OfflineAppRuntime";

/**
 * UIManager
 */
class UIManager {
  oap: IOAPInterface;
  appId: number;

  constructor(oap: IOAPInterface) {
    this.oap = oap;
  }

  show(stateId: number) {
    this.oap.openState(stateId);
  }

  showInitialScreen(stateId: number) {
    this.oap.showInitialScreen(stateId);
  }

  attachListenerToButton(id: number, cb: () => void) {
    this.oap.attachListenerToButton(id, cb);
  }
}

export default new UIManager(new OfflineAppRuntime());
