import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://b3f79d4491934212966345664eabc904@sentry.io/5167864"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
