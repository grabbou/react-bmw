import IOAPInterface, { OAP } from './IOAPInterface';

// @ts-ignore
import OnlineApp from 'oap-sdk/src/core/OnlineApp';

const onlineApp: OAP = new OnlineApp();
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
  attachListenerToButton: (id: number, cb: () => void) => void = async (
    id,
    cb
  ) => {
    const buttonHandle = onlineApp.rhmiApplication.getById(id);
    buttonHandle.on('action', cb);
  };

  openState = async (id: number) => {
    await rhmiIsReady;

    await onlineApp.rhmiApplication.openState(id);
  };

  showInitialScreen = async (entryStateId: string, stateId: number) => {
    await rhmiIsReady;

    const entryState = onlineApp.rhmiApplication.getById(stateId);
    await onlineApp.rhmiApplication.mapEntryState(entryStateId, entryState);

    await entryState.updateResources();
    if (onlineApp.startReason === 'ENTRY_POINT') {
      await onlineApp.rhmiApplication.openEntryState(entryStateId);
    }
  };
}

export default OnlineAppRuntime;
