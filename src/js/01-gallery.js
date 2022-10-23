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
  <div class="gallery__item">
    <a class="gallery__link" href="${data.original}">
        <img
        class="gallery__image"
        src="${data.preview}"
        data-source="${data.original}"
        alt="${data.description}"
        />
    </a>
  </div>`;
}

function onClickGallery() {
  gallery.addEventListener("click", function handleClick(evt) {
    evt.preventDefault();
    const url = evt.target.dataset.source;
    const originalPicture = basicLightbox.create(
      `
        <div class="modal">
            <img src="${url}">
        </div>
    `,
      {
        onShow: () => {
          document.addEventListener("keydown", handleClose);
        },
        onClose: () => {
          document.removeEventListener("keydown", handleClose);
        },
      }
    );

    function handleClose(evt) {
      if (evt.key === "Escape") {
        originalPicture.close();
      }
    }

    originalPicture.show();
  });
}

renderGallery();
onClickGallery();
