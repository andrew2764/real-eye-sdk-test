import { RealEyeSdk } from "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.3.js";
import React, { FunctionComponent, useEffect } from "react";

// Import the RealEye tracking sdk here and export it as a function component


declare global {
  interface Window {
    reSdk: RealEyeSdk;
  }
}

export const TrackingScripts: FunctionComponent = () => {
  useEffect(() => {
    import(
      /* webpackIgnore: true */ "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.3.js"
    ).then(({EmbeddedPageSdk}) => {
      window.reSdk = new EmbeddedPageSdk(false)
    })
  }, [])
  
  return (
    <>
      <div>TrackingScripts</div>
    </>
  );
};
