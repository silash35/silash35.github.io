export default () => {
  if ("serviceWorker" in navigator) {
    // Use the window load event to keep the page load performant
    const sw = "/service-worker.js";
    navigator.serviceWorker.register(sw);
  }
};
