import globalize from "./modules/_globalize";
import configDialog from "./modules/_configDialog";
import init from "./modules/_init";
configDialog();
init();


globalize("goToCurriculum", () => {
  const userLang = navigator.language || navigator.userLanguage;

  if(userLang[0] == "p" && userLang[1] == "t"){
    window.location.pathname = '/curriculo.html';
  }else{
    window.location.pathname = '/curriculum.html';
  }
});