import configHeader from "./configComponents/header";
import configTextFields from "./configComponents/textFields";
import installSW from "./utils/installServiceWorker";

window.addEventListener("load", function () {
  configHeader(document.querySelector(".standardHeader"));
  configTextFields(document.querySelectorAll(".textField,.textArea"));
  installSW();
});
