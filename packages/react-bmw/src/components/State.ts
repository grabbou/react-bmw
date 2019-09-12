import { HMIState, UIManager } from 'react-rhmi-renderer';

abstract class State implements HMIState {
  ui: UIManager;  
  
  constructor(ui: UIManager) {
    this.ui = ui;
  }

  async init() {
    // prepare for changes
    this.render();
  }

  async open() {
    return this.ui.navigateTo(10);
  }

  abstract render();
}

export default State;
