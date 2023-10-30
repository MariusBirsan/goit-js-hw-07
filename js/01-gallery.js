import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li"); //creaza un element
  li.classList.add("gallery__item"); //adauga clasa
  // Adaugam continutul HTML
  li.innerHTML = `
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
  galleryList.append(li); //Adaugam elementul li la sfarsitul listei ul
});

const imageList = document.querySelectorAll("img");

imageList.forEach((image) => {
  image.addEventListener("click", (e) => {
    galleryItems.forEach((item) => {
      if (item.description === image.alt) {
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

galleryList.addEventListener("click", preventDefaultClick);

function preventDefaultClick(e) {
  e.preventDefault();
}
