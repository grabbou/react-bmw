import IOAPInterface from './IOAPInterface';
import { ReactElement, CElement} from 'react';
import reactDOM from 'react-dom';
import OnlineAppRuntime from './OnlineAppRuntime';

/**
 * UIManager
 */
class UIManager {
  oap: IOAPInterface;
  entryPointId: string;

  constructor(oap: IOAPInterface) {
    this.oap = oap;
  }

  show(stateId: number) {
    this.oap.openState(stateId);
  }

  showInitialScreen(stateId: number) {
    this.oap.showInitialScreen(this.entryPointId, stateId);
  }

  attachListenerToButton(id: number, cb: () => void) {
    this.oap.attachListenerToButton(id, cb);
  }

  runApplication = (Component: ReactElement, entryPointId: string) => {
    this.entryPointId = entryPointId;
    // @ts-ignore
    // @todo FIX THE TYPES!!
    reactDOM.render(Component, document.getElementById(entryPointId) || document.getElementById('root'));
  };
}

export default new UIManager(new OnlineAppRuntime());
