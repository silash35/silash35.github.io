import configHeader from "./modules/_configHeader";
import configModal from "./modules/_configModal";
import globalize from "./modules/_globalize";
import installSW from "./modules/_installServiceWorker";
import setCloseElement from "./modules/_setCloseElement";

window.addEventListener("load", function () {
  configHeader();
  installSW();
  setCloseElement();
  configModal();
});

globalize("goToCurriculum", () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang[0] == "p" && userLang[1] == "t") {
    window.location.pathname = "/curriculo.html";
  } else {
    window.location.pathname = "/curriculum.html";
  }
});
