import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const gallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);
galleryContainer.addEventListener("click", handlePhotoClick);

function createGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item" id="preview">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

function handlePhotoClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();

  const modal = basicLightbox.create(`<img
      class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`);

  // const targetElement = event.target.closest(".gallery__item");

  // const original =
  //   targetElement.querySelector(".gallery__image").dataset.source;
  // const description = targetElement.querySelector(".gallery__image").alt;

  // const instance = basicLightbox.create(`<div class="modal">
  //   <img
  //     class="gallery__image"
  //     src="${original}"
  //     data-source="${original}"
  //     alt="${description}"
  //   />
  // </div>`);
  modal.show();
}

// document.querySelector(".gallery").addEventListener("click", (event) => {
//   event.preventDefault();

//   if (event.target.nodeName === "IMG") {
//     const source = event.target.dataset.source;

//     const instance = basicLightbox.create(
//       `<img src="${source}" width="800" height="600">`
//     );
//     instance.show();
//   }
// });

// createGallery();

console.log(galleryItems);
