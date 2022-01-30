import configDialog from "./components/_configDialog";
import configHeader from "./components/_configHeader";
import configModal from "./components/_configModal";
import globalize from "./modules/_globalize";
import installSW from "./modules/_installServiceWorker";

window.addEventListener("load", function () {
  configHeader();
  configDialog();
  configModal();
  installSW();
});

globalize("goToCurriculum", () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang[0] == "p" && userLang[1] == "t") {
    window.location.pathname = "/curriculo.html";
  } else {
    window.location.pathname = "/curriculum.html";
  }
});
