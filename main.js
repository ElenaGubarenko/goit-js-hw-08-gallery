import images from "./gallery-items"

const jsGalleryRef = document.querySelector(".js-gallery")

const newImage = (arr) =>
  arr.reduce((acc, element) => {
    acc +
      `< li class="gallery__item" >
    <a
      class="gallery__link"
      href="${element.original}"
    >
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
</li >`
  }, "")
