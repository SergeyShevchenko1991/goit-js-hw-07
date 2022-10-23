import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function renderGallery() {
  let itemsHtml = "";

  for (const item of galleryItems) {
    itemsHtml += getHtmlPreview(item);
  }
  gallery.insertAdjacentHTML("afterbegin", itemsHtml);
}

function getHtmlPreview(data) {
  return `
    <a class="gallery__item" href="${data.original}" >
        <img
            class="gallery__image"
            src="${data.preview}"
            alt="${data.description}" title="${data.description}"
        />
    </a>`;
}

renderGallery();

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
