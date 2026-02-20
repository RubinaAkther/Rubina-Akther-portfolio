// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cd52666a5f13c90a48b2320199909718@o4510754847326208.ingest.de.sentry.io/4510754851127376",

  // Performance tracing
  tracesSampleRate: 1,

  // Enable logs
  enableLogs: true,

  // ✅ Feedback integration properly added
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],

  // Send user PII
  sendDefaultPii: true,
});

export const onRouterTransitionStart =
  Sentry.captureRouterTransitionStart;
