import globalize from "../modules/_globalize";

export default () => {
  globalize("closeDialog", (id) => {
    const elementToClose = document.getElementById(id);
    elementToClose.style.opacity = "0";

    // Waits the animation ends
    setTimeout(() => {
      elementToClose.style.visibility = "collapse";
    }, 300);
  });
};
