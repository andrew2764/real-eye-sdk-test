declare module "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.3.js" {
  declare class RealEyeSdk {
    constructor(debugMode: boolean);
    startNextExposure: () => void;
    finishEyeTrackingTest: () => void;
    setStimulusId: (stimulusId: string | null) => void;
    getStimulusId: () => string;
  }

  export const EmbeddedPageSdk: typeof RealEyeSdk;
}