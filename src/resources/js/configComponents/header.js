const configHeader = (header) => {
  const navLinks = header.querySelector(".navLinks");
  const screenDarkener = header.querySelector(".screenDarkener");
  const sidenavTrigger = header.querySelector(".sidenavTrigger");

  // Define Functions

  const closeSideNav = () => {
    navLinks.style.transform = "translateX(0)";
    screenDarkener.style.opacity = "0";

    // waits the animation ends
    setTimeout(function () {
      screenDarkener.style.visibility = "collapse";
    }, 300);
  };

  const openSideNav = () => {
    navLinks.style.transform = "translateX(300px)";
    screenDarkener.style.visibility = "visible";
    screenDarkener.style.opacity = ".2";
  };

  const closeSidenavOnMedia = () => {
    const mediaQuery = window.matchMedia("(min-width: 800px)");
    const handleScreenChange = (e) => {
      if (e.matches) {
        closeSideNav();
      }
    };
    mediaQuery.addEventListener("change", handleScreenChange);
  };

  // Config Header
  screenDarkener.addEventListener("click", closeSideNav);
  sidenavTrigger.addEventListener("click", openSideNav);
  closeSidenavOnMedia();
};

export default configHeader;
