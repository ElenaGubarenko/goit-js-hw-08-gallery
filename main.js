import arr from "./gallery-items.js"

const jsGalleryRef = document.querySelector(".js-gallery")
const lightBoxRef = document.querySelector(".js-lightbox")
const buttonCrossRef = document.querySelector(".lightbox__button")
const lightboxContentRef = document.querySelector(".lightbox__image")
const ovrlayRef = document.querySelector(".lightbox__overlay")

const arrOfSrc = (arr) => arr.map((element) => element.original)

// console.log(arrOfSrc(arr))

const newImage = (arr) =>
  arr.reduce((acc, element) => {
    acc =
      acc +
      `<li class="gallery__item">
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

    return acc
  }, "")

jsGalleryRef.insertAdjacentHTML("afterbegin", newImage(arr))

const closeModal = (event) => {
  lightBoxRef.classList.toggle("is-open")
  lightboxContentRef.setAttribute("src", "")
}

const modalCloseByEsc = (event) => {
  if (event.code !== "Escape") return
  lightBoxRef.classList.remove("is-open")
}

const arrFree = arrOfSrc(arr)
let index = 0

const setBigUrl = (event) => {
  event.preventDefault()
  const eventTarget = event.target

  if (eventTarget.nodeName === "A") return

  const targetElement = eventTarget.attributes[2].nodeValue
  lightBoxRef.classList.toggle("is-open")
  lightboxContentRef.setAttribute("src", `${targetElement}`)
  // console.dir(eventTarget)
}

jsGalleryRef.addEventListener("click", setBigUrl)
buttonCrossRef.addEventListener("click", closeModal)
ovrlayRef.addEventListener("click", closeModal)
window.addEventListener("keyup", modalCloseByEsc)
