"use client";

import { useEffect } from "react";
import { RealEyeSdk } from "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.3.js";

let reSdk: RealEyeSdk;
export default function Home() {
  useEffect(() => {
    import(
      /* webpackIgnore: true */ "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.3.js"
    ).then(({EmbeddedPageSdk}) => {
      reSdk = new EmbeddedPageSdk(false)
    })
  }, [])
  return (
    <main>
      <h1>Lorem, ipsum dolor sit.</h1>
      {/* <TrackingScripts /> */}
    </main>
  );
}
