import configHeader from "./components/_configHeader";
import configTextFields from "./components/_configTextFields";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader(document.querySelector(".standardHeader"));
  configTextFields();
  installSW();
});
