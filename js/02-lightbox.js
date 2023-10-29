import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li");
  galleryList.append(li);
  li.classList.add("gallery__item");
  const imgElement = `<img class="gallery__image" src=${image.preview} data-source=${image.original} alt=${image.description} />`;
  li.insertAdjacentHTML("afterbegin", imgElement);
});

const imageList = document.querySelectorAll("img");

imageList.forEach((image) => {
  image.addEventListener("click", (e) => {
    galleryItems.forEach((item) => {
      if (item.description.includes(`${image.alt}`)) {
        basicLightbox
          .create(
            `
            <img src=${image.dataset.source}>
    `
          )
          .show();
      }
    });
  });
});


