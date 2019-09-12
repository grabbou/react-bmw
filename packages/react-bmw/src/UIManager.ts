import HMIState from './HMIState';

// @ts-ignore: BMW proprietary SDK, not present in OSS
import OnlineApp from 'oap-sdk/src/core/OnlineApp.js';

declare class RHMIState {
  updateResources: () => Promise<void>;
};

type RHMI = {
  onRhmiReady: () => Promise<void>;
  openEntryState: (entryStateId: string) => Promise<void>;
  openState: (id: number) => Promise<void>;
  mapEntryState: (entryStateId: string, entryState: RHMIState) => Promise<void>;
  getById: (id: number) => RHMIState;
  init: () => Promise<void>;
};

/**
 * Online BMW application instance that represents
 * the lifecycle of the current app
 */
type OAP = {
  rhmiApplication: RHMI;
  startReason: string;
  start: () => Promise<void>;
  on: (name: string, handler: (uuid: string) => Promise<void>) => void;
};

/**
 * UIManager
 */
class UIManager {
  oap: OAP;
  appId: number;

  constructor(oap: OAP) {
    this.oap = oap;
  }

  async start(entryPointId: string, stateId: number) {
    this.oap.on('entryPointExecute', async () => {
      this.oap.rhmiApplication.openEntryState(entryPointId);
    });

    this.oap.on('rhmiReady', async () => {
      const entryState = this.oap.rhmiApplication.getById(stateId);
      await entryState.updateResources();

      await this.oap.rhmiApplication.mapEntryState(entryPointId, entryState);

      if (this.oap.startReason === 'ENTRY_POINT') {
        await this.oap.rhmiApplication.openEntryState(entryPointId);
      }
    });

    // @todo initialised event

    await this.oap.start();
  }

  navigateTo(stateId: number) {
    this.oap.rhmiApplication.openState(stateId);
  }

  static async runApplication(
    AppPresenter: new (ui: UIManager) => HMIState,
    entryPointId: string
  ) {
    const oap = new OnlineApp();

    const ui = new UIManager(oap);

    const appInstance = new AppPresenter(ui);

    await appInstance.init();

    ui.start(entryPointId, 10);
  }
}

export default UIManager;
