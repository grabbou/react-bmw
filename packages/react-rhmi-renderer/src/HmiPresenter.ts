export default interface HmiPresenter {
  open: () => Promise<void>;
  init: () => Promise<void>;
}
