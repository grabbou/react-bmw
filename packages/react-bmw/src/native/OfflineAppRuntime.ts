import IOAPInterface from "./IOAPInterface";

/**
 * Like OAP, but without the SDK. This is to provide a realiable proxy
 * to the RHMI interface having a very limited access to the available
 * APIs
 */
class OfflineAppRuntime implements IOAPInterface {
  openState = id => {
    console.log(`Ready to show scene: ${id}`);
  };
}

export default OfflineAppRuntime;
