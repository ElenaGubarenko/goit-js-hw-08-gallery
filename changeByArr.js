import arr from "./gallery-items.js"

const jsGalleryRef = document.querySelector(".js-gallery")
const lightBoxRef = document.querySelector(".js-lightbox")
const buttonCrossRef = document.querySelector(".lightbox__button")
const lightboxContentRef = document.querySelector(".lightbox__image")
const ovrlayRef = document.querySelector(".lightbox__overlay")

const arrOfSrc = (arr) => arr.map((element) => element.original)

let indexImg = -1

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
     data-index ="${(indexImg = indexImg + 1)}"
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

const imgRef = document.querySelector(".gallery__image")

const setBigUrl = (event) => {
  event.preventDefault()
  const eventTarget = event.target

  if (eventTarget.nodeName === "A") return

  const targetElement = eventTarget.attributes[2].nodeValue
  lightBoxRef.classList.toggle("is-open")
  lightboxContentRef.setAttribute("src", `${targetElement}`)
  lightboxContentRef.setAttribute("src", `${targetElement}`)

  // console.dir(event)
}

const arrFree = arrOfSrc(arr)

let indexInArrFree = 0

const changeByArr = (event) => {
  const indexOfCurrentBigImg = event.target.firstElementChild.dataset.index
  const currentUrl = event.target.firstElementChild.dataset.source
  indexInArrFree = parseInt(arrFree.indexOf(currentUrl))
  // console.log(indexOfCurrentBigImg)
  // console.log(currentUrl)
  // console.log(isNaN(indexInArrFree))

  // console.log(indexInArrFree == indexOfCurrentBigImg)
  const change = () => {
    lightboxContentRef.setAttribute("src", `${arrFree[indexInArrFree + 1]}`)
  }

  if (event.key === "ArrowRight") {
    change()
  }
}

jsGalleryRef.addEventListener("click", setBigUrl)
buttonCrossRef.addEventListener("click", closeModal)
ovrlayRef.addEventListener("click", closeModal)
window.addEventListener("keyup", modalCloseByEsc)
window.addEventListener("keyup", changeByArr)
