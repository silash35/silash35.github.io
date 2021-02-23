const toggleImage = (img) => {
  if (img.classList.contains("imageModal")) {
    img.classList.remove("imageModal");
    img.id = "imageModal_opened";
  } else {
    img.id = "";
    img.classList.add("imageModal");
  }
};

export default () => {
  const images = document.querySelectorAll(".imageModal");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      toggleImage(img);
    });
  });
};
