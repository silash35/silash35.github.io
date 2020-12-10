import globalize from "./_globalize";

const navLinks = document.querySelector(".navLinks");
const screenDarkener = document.querySelector(".screenDarkener");

function setHeaderActive() {
  const links = navLinks.getElementsByTagName("li");
  let title = document.querySelector("title").innerText;

  if (title == "Silas Henrique") {
    title = "Home";
  }
  for (let i = 0; i < links.length; ++i) {
    if (title.toUpperCase() == links[i].innerText) {
      links[i].classList.add("active");
    }
  }
}

function globalizeSidenavFunctions() {
  globalize("openSidenav", () => {
    navLinks.style.left = "0px";
    screenDarkener.style.visibility = "visible";
    screenDarkener.style.opacity = ".2";
  });

  globalize("closeSidenav", () => {
    navLinks.style.left = "-300px";
    screenDarkener.style.opacity = "0";

    // waits the animation ends
    setTimeout(function () {
      screenDarkener.style.visibility = "collapse";
    }, 300);
  });
}

export default () => {
  document.querySelector("body").onload = setHeaderActive;
  globalizeSidenavFunctions();
};
