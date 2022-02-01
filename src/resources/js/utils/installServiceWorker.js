export default () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(new URL("/src/service-worker.js", import.meta.url), {
      type: "module",
    });
  }
};
