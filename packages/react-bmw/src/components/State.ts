import { HmiPresenter } from 'react-rhmi-renderer';

type RhmiApp = {
    openState: (number: int) => Promise<void>,
  };

type OAP = {
  rhmiApplication: RhmiApp;
};

class State implements HmiPresenter {
    oap: OAP;

    async init() {}

    async open() {
      return this.oap.rhmiApplication.openState(10);
    }
}

export default State;