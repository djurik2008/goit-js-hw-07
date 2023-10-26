import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryContainer.addEventListener("click", onImgClick);

function createMarkup(arr) {
  return arr
    .map(
      ({preview, original, description}) =>
        `<li class="gallery__item">
   <a class="gallery__link"
   href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}" />
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
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
