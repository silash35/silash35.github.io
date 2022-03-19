import configHeader from "./configComponents/header";
import configModal from "./configComponents/modal";
import installSW from "./utils/installServiceWorker";

window.addEventListener("load", function () {
  configHeader(document.querySelector(".standardHeader"));
  configModal(document.querySelectorAll(".imageModal"));
  installSW();
});
