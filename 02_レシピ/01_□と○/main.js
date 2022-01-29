const figure = document.getElementById("figure")
const Button = document.getElementById("button")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}

Button.onclick = function () {
  figure.classList.toggle("rounded")
}
