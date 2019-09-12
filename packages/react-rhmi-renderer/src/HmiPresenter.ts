interface HmiPresenter {
  open: () => Promise<void>;
  init: () => Promise<void>;
}

export default HmiPresenter;