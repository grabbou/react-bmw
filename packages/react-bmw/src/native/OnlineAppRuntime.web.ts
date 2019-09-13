import IOAPInterface from './IOAPInterface';

/**
 * Like OAP, but without the SDK. This is to provide a realiable proxy
 * to the RHMI interface having a very limited access to the available
 * APIs
 */
class OfflineAppRuntime implements IOAPInterface {
  openState = (id: number) => {
    console.log(`Ready to show scene: ${id}`);
  };
  showInitialScreen(entryPointId: string, stateId: number) {
    console.log(`Showing initial screen: ${stateId} for ${entryPointId}`);
  }
  attachListenerToButton(id: number) {
    console.log(`Attaching listener to a button with id: ${id}`);
  }
}

export default OfflineAppRuntime;
