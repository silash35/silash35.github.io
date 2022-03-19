export default function configDialog(dialog, yesHandler) {
  const closeDialog = () => {
    dialog.style.opacity = "0";
    // Waits the animation ends
    setTimeout(() => {
      dialog.style.visibility = "collapse";
    }, 300);
  };

  const yesButtons = document.querySelectorAll(".yes");
  yesButtons.forEach((yesButton) => {
    yesButton.addEventListener("click", yesHandler);
  });

  const noButtons = document.querySelectorAll(".no");
  noButtons.forEach((noButton) => {
    noButton.addEventListener("click", closeDialog);
  });
}
