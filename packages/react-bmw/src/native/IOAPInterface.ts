export declare class RHMIState {
  updateResources: () => Promise<void>;
}

export type RHMI = {
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
export type OAP = {
  rhmiApplication: RHMI;
  startReason: string;
  start: () => Promise<void>;
  on: (name: string, handler: (uuid: string) => Promise<void>) => void;
};

interface IOAPInterface {
  openState: (id: number) => void;
}

export default IOAPInterface;
