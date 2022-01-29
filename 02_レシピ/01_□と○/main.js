const figure = document.getElementById("figure")

figure.onclick = function () {
  if (figure.className === "square") {
    figure.classList.add("rounded")
    figure.classList.remove("square")
  } else if (figure.className === "rounded") {
    figure.classList.add("triangle")
    figure.classList.remove("rounded")
  } else {
    figure.classList.add("square")
    figure.classList.remove("triangle")
  }
}
