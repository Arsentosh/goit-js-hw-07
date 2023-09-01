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
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
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

  // const modal = lightbox.create(`<img
  //       class="gallery__image"
  //       src="${event.target.dataset.source}"
  //       alt="${event.target.alt}"

  //       />`);

  const lightbox = new SimpleLightbox(".gallery a", {
    sourceAttr: "$data-source",
  });
  lightbox.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  });
}

console.log(galleryItems);
