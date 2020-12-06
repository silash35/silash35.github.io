import globalize from "./_globalize";

export default () => {
  globalize("closeElement", (id) => {
    const elementToClose = document.getElementById(id);
    elementToClose.style.opacity = "0";

    // Waits the animation ends
    setTimeout(() => {
      elementToClose.style.visibility = "collapse";
    }, 300);
  });
};
