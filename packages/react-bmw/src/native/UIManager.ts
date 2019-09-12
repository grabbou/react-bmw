import HMIState from './HMIState';

// @ts-ignore: BMW proprietary SDK, not present in OSS

declare class RHMIState {
  updateResources: () => Promise<void>;
}

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
  initialized: () => Promise<void>;
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

    this.oap.on('initialized', async () => {
      await this.oap.initialized();
    });
    await this.oap.start();
  }

  navigateTo(stateId: number) {
    this.oap.rhmiApplication.openState(stateId);
  }

  static async runApplication(
    oapApp: any,
    AppPresenter: new (
      logFactory: any,
      ui: UIManager,
      dataModels: any,
      build: any
    ) => HMIState,
    entryPointId: string,
    logFactory: any,
    dataModels: any,
    build: any
  ) {


    const ui = new UIManager(oapApp);

    const appInstance = new AppPresenter(logFactory, oapApp, dataModels, build);

    await appInstance.init();

    ui.start(entryPointId, 1);
  }
}

export default UIManager;
