import globalize from "./_globalize";

export default () => {
  globalize("closeDialog", (event) => {
    event.path[3].style.opacity = "0";

    //waits the animation ends
    setTimeout(function () {
      event.path[3].style.visibility = "collapse";
    }, 300);
  });
};
