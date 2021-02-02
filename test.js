const changePictureByArrow = (event) => {
  if (event.code !== "ArrowRight" && event.code !== "ArrowLeft") return

  if (event.code === "ArrowRight") {
    for (let i = arrFree.indexOf(event.target.href); i <= arrFree.length; i += 1) {
      index = index + 1

      // console.log(arrFree[index])
      // lightboxContentRef.setAttribute("src", `${arrFree[index]}`)
    }
    console.log(index)
  }
}

// if (event.code === "ArrowLeft") {
//   for (let i = index; i <= arrFree.length && i >= 0; i -= 1) {
//     index = index - 1
//     // console.log(arrFree[index])
//     lightboxContentRef.setAttribute("src", `${arrFree[index]}`)
//     break
//   }
// }

window.addEventListener("keyup", changePictureByArrow)
