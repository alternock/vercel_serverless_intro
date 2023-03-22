const Sentry = require("@sentry/node");

const Tracing = require("@sentry/tracing");


Sentry.init({
  dsn: "https://2f09edc87b694672b63dde533421644a@o4504879513731072.ingest.sentry.io/4504879516680192",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

module.exports = Sentry;