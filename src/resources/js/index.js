import configHeader from "./modules/_configHeader";
import configModal from "./modules/_configModal";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader();
  installSW();
  configModal();
});
