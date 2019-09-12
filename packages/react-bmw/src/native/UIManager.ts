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

  showInitialScreen(stateId: number) {}
}

export default new UIManager(new OfflineAppRuntime());

// async start(entryPointId: string, stateId: number) {
//   this.oap.on("entryPointExecute", async () => {
//     this.oap.rhmiApplication.openEntryState(entryPointId);
//   });

//   this.oap.on("rhmiReady", async () => {
//     const entryState = this.oap.rhmiApplication.getById(stateId);
//     await entryState.updateResources();

//     await this.oap.rhmiApplication.mapEntryState(entryPointId, entryState);

//     if (this.oap.startReason === "ENTRY_POINT") {
//       await this.oap.rhmiApplication.openEntryState(entryPointId);
//     }
//   });

//   // @todo initialised event

//   await this.oap.start();
// }

// async runApplication(
//   ComponentFactory: new (ui: UIManager) => HMIState,
//   entryPointId: string
// ) {
//   const ui = new UIManager(oap);

//   const appInstance = new AppPresenter(ui);

//   await appInstance.init();

//   ui.start(entryPointId, 10);
// }
