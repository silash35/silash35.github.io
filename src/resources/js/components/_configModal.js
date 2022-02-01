const configModal = (images) => {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      {
        if (img.classList.contains("imageModal")) {
          img.classList.remove("imageModal");
          img.id = "imageModal_opened";
        } else {
          img.id = "";
          img.classList.add("imageModal");
        }
      }
    });
  });
};

export default configModal;
