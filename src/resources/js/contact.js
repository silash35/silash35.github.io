import configHeader from "./modules/_configHeader";
import configTextFields from "./modules/_configTextFields";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader();
  configTextFields();
  installSW();
});
