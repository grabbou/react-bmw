// @todo
// to be implemented
class OnlineAppRuntime {}

throw new Error("Not implemented");

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

export default OnlineAppRuntime;
