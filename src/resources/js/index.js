import configHeader from "./modules/_configHeader";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader();
  installSW();
});
