const display = document.getElementById("display")
const minusButton = document.getElementById("minus-button")
const plusButton = document.getElementById("plus-button")
const kakeruButton = document.getElementById("kakeru-button")
const waruButton = document.getElementById("waru-button")
const num1Input = document.getElementById("num1-input")
const num2Input = document.getElementById("num2-input")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
minusButton.onclick = function () {
  // count を更新
  count = num1Input.value - num2Input.value
  // count を表示
  console.log(count)
  display.textContent = count
}

plusButton.onclick = function () {
  // count を更新
  count = num1Input.value + num2Input.value
  // count を表示
  display.textContent = count
}
kakeruButton.onclick = function () {
  // count を更新
  count = num1Input.value * num2Input.value
  // count を表示
  display.textContent = count
}
waruButton.onclick = function () {
  // count を更新
  count = num1Input.value / num2Input.value
  // count を表示
  display.textContent = count
}
