import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

galleryItems.forEach((image) => {
  const li = document.createElement("li");
  galleryList.append(li);
  li.classList.add("gallery__item");
  const imgElement = `<img class="gallery__image" src=${image.preview} alt=${image.description} />`;
  li.insertAdjacentHTML("afterbegin", imgElement);
});