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
  contextLogger: any;

  constructor(oap: OAP, logFactory) {
    this.oap = oap;
    this.contextLogger = logFactory('UIMG');
  }

  async start(entryPointId: string, stateId: number, appInstance: HMIState) {
    this.contextLogger.info(`[start]`);
  }

  navigateTo(stateId: number) {
    this.oap.rhmiApplication.openState(stateId);
  }

  static async runApplication(
    oapApp: OAP,
    AppPresenter: new (logFactory: any, oap: OAP) => HMIState,
    entryPointId: string,
    logFactory: any
  ) {
    const contextLogger = logFactory('OA39');
    oapApp.on('entryPointExecute', async () => {
      oapApp.rhmiApplication.openEntryState(entryPointId);
    });
    const appInstance = new AppPresenter(logFactory, oapApp);
    oapApp.on('rhmiReady', async () => {
      contextLogger.info(`[rhmiReady] startReason ${oapApp.startReason}`);
      const entryState = oapApp.rhmiApplication.getById(1);
      await oapApp.rhmiApplication.mapEntryState(entryPointId, entryState);

      await entryState.updateResources();
      if (oapApp.startReason === 'ENTRY_POINT') {
        await oapApp.rhmiApplication.openEntryState(entryPointId);
      }

      await appInstance.init();
    });
    oapApp.on('initialized', async () => {
      contextLogger.info(`[initialized]`);
      await oapApp.initialized();
    });
    await oapApp.start();
  }
}

export default UIManager;
