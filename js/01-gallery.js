import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

galleryContainer.addEventListener("click", onImgClick);

function createMarcup(arr) {
  return arr
    .map(
      ({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function onImgClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" />`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = e.code === ESC_KEY_CODE;
    if (!isEscKey) {
      return;
    }
    instance.close();
  }
}
