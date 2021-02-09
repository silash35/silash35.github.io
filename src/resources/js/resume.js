import configHeader from "./modules/_configHeader";
import globalize from "./modules/_globalize";
import setCloseElement from "./modules/_setCloseElement";
setCloseElement();
configHeader();

globalize("goToCurriculum", () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang[0] == "p" && userLang[1] == "t") {
    window.location.pathname = "/curriculo.html";
  } else {
    window.location.pathname = "/curriculum.html";
  }
});
