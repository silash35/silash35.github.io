import globalize from "./_globalize";

export default () => {
  globalize("closeDialog", (id) => {
    const dialog = document.getElementById(id);
    dialog.style.opacity = "0";

    //waits the animation ends
    setTimeout(function () {
      dialog.style.visibility = "collapse";
    }, 300);
  });
};
