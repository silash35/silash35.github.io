import configHeader from "./components/_configHeader";
import configModal from "./components/_configModal";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader();
  installSW();
  configModal();
});
