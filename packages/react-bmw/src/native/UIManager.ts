import IOAPInterface from "./IOAPInterface";

let OnlineAppRuntime: new () => IOAPInterface;

try {
  OnlineAppRuntime = require("./OnlineAppRuntime").default;
} catch (e) {
  OnlineAppRuntime = require("./OfflineAppRuntime").default;
}

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

export default new UIManager(new OnlineAppRuntime());
