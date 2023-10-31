import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const li = document.createElement("li"); 
  li.classList.add("gallery__item"); 
  li.innerHTML = `
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`;
  galleryList.append(li);
});

galleryList.addEventListener("click", preventDefaultClick);

function preventDefaultClick(e) {
  e.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt", // utilizeaza textul din atributul alt al img
  captionDelay: 250,
});



