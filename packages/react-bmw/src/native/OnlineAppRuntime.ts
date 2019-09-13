import IOAPInterface, { OAP } from './IOAPInterface';

// @ts-ignore
import OnlineApp from "oap-sdk/src/core/OnlineApp"; // eslint-disable-line

const onlineApp: OAP = new OnlineApp();

export const rhmiIsReady = new Promise(resolve => {
  onlineApp.on('rhmiReady', async () => {
    resolve();
  });
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
    await rhmiIsReady;
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
    await onlineApp.rhmiApplication.mapEntryState('89065040-ce62-11e9-b5b0-959cc45744a0', entryState);

    await entryState.updateResources();
    if (onlineApp.startReason === 'ENTRY_POINT') {
      await onlineApp.rhmiApplication.openEntryState('89065040-ce62-11e9-b5b0-959cc45744a0');
    }

    onlineApp.on('entryPointExecute', async () => {
      onlineApp.rhmiApplication.openEntryState('89065040-ce62-11e9-b5b0-959cc45744a0');
    });
  };
}

export default OnlineAppRuntime;
