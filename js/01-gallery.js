import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// console.log(gallery);

const marcup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <div class= gallery__item>
    <a class= gallery__link href="${original}">
     <img
    class= gallery__image
    src='${preview}' 
    data-source="${original}"
    alt="${description}">
       </a>
       </div>`
  )
  .join("");

gallery.innerHTML = marcup;

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();

  // проверка клика точно по img
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const originalImg = evt.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src= '${originalImg}' width="800" height="600">
`);
  instance.show();

  // закрытие модалки
  window.addEventListener("keydown", closeModal);
  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

// console.log(basicLightbox);
