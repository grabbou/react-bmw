import HmiPresenter from './HmiPresenter';

// @ts-ignore: BMW proprietary SDK, not present in OSS
import OnlineApp from 'oap-sdk/src/core/OnlineApp.js'; 

type RHMI = {
  onRhmiReady: () => Promise<void>,
  init: () => Promise<void>,
};

/**
 * Online BMW application instance that represents
 * the lifecycle of the current app
 */
type OAP = {
  rhmiApplication: RHMI,
};

class UIManager {
  oap: OAP;
  
  constructor(oap: OAP) {
    this.oap = oap;
  }

  static runApplication<T extends HmiPresenter>(AppPresenter: T) {
    const oap = new OnlineApp();

    const ui = new UIManager(oap);

    const appInstance = new AppPresenter();

    oap.rhmiApplication
      .onRhmiReady(() => appInstance.init())
      .init()
  }
}

export default UIManager;

// ReactRHMIRenderer.runApplication(App);


// ---


// inversify

// container.bind ourselves to inject the components 
// THIS IS IN typescript/di

// 1. start()

// onRhmiReady -> hmiPresneters - init() - 
// commnent: potential improvemt of lazy init

// Sheer Developing Pleasure

/**
 * import ReactRHMIRenderer from 'react-bmw-renderer';
 * import React from 'react';
 * 
 * import MainScreen from './MainScreen';
 * 
 * ReactRHMIRenderer.render(MainScreen);
 */