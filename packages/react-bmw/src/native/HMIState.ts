export default interface HMIState {
  open: () => Promise<void>;
  init: () => Promise<void>;
}
