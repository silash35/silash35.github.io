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
    navLinks.style.transform = "translateX(300px)";
    screenDarkener.style.visibility = "visible";
    screenDarkener.style.opacity = ".2";
  });

  globalize("closeSidenav", () => {
    navLinks.style.transform = "translateX(0)";
    screenDarkener.style.opacity = "0";

    // waits the animation ends
    setTimeout(function () {
      screenDarkener.style.visibility = "collapse";
    }, 300);
  });
}

function closeSidenavOnMedia() {
  const mediaQuery = window.matchMedia("(min-width: 800px)");

  const handleScreenChange = (e) => {
    if (e.matches) {
      closeSidenav();
    }
  };

  mediaQuery.addEventListener("change", handleScreenChange);
}

export default () => {
  setHeaderActive();
  globalizeSidenavFunctions();
  closeSidenavOnMedia();
};
