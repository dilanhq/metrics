import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "<YOUR_DSN>",
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
});
