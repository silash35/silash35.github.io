export default () => {
  if ("serviceWorker" in navigator) {
    const sw = "/service-worker.js";
    navigator.serviceWorker.register(sw);
  }
};
