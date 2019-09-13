// @todo
// to be implemented
import IOAPInterface from './IOAPInterface';
import OnlineApp from 'oap-sdk/src/core/OnlineApp';

const onlineApp = new OnlineApp();
const rhmiIsReady = new Promise(resolve => {
  onlineApp.on('rhmiReady', async () => {
    resolve();
  });
});
onlineApp.on('entryPointExecute', async () => {
  onlineApp.rhmiApplication.openEntryState(
    '89065040-ce62-11e9-b5b0-959cc45744a0'
  );
});
onlineApp.on('initialized', async () => {
  await onlineApp.initialized();
});
onlineApp.start();

class OnlineAppRuntime implements IOAPInterface {
  attachListenerToButton: (id: number, cb: () => void) => void = async (id, cb) => {
    const buttonHandle = onlineApp.rhmiApplication.getById(id);
    buttonHandle.on('action', cb);
  };
  openState: (id: number) => void = async id => {
    await rhmiIsReady;
    await onlineApp.rhmiApplication.openState(id);
  };
  showInitialScreen: (stateId: number) => void = async stateId => {
    await rhmiIsReady;
    const entryState = onlineApp.rhmiApplication.getById(stateId);
    await onlineApp.rhmiApplication.mapEntryState(
      '89065040-ce62-11e9-b5b0-959cc45744a0',
      entryState
    );

    await entryState.updateResources();
    if (onlineApp.startReason === 'ENTRY_POINT') {
      await onlineApp.rhmiApplication.openEntryState(
        '89065040-ce62-11e9-b5b0-959cc45744a0'
      );
    }
  };
}

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
