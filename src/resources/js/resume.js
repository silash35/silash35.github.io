import configDialog from "./components/_configDialog";
import configHeader from "./components/_configHeader";
import configModal from "./components/_configModal";
import installSW from "./modules/_installServiceWorker";

const goToCurriculum = () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang[0] == "p" && userLang[1] == "t") {
    window.location.pathname = "/curriculo.html";
  } else {
    window.location.pathname = "/curriculum.html";
  }
};

window.addEventListener("load", function () {
  configHeader(document.querySelector(".standardHeader"));
  configDialog(document.getElementById("goToCurriculumDialog"), goToCurriculum);
  configModal(document.querySelectorAll(".imageModal"));
  installSW();
});
