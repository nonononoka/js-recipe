const display = document.getElementById("display")
const minusButton = document.getElementById("minus-button")
const plus2Button = document.getElementById("plus2-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
minusButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

plus2Button.onclick = function () {
  // count を更新
  count += 2
  // count を表示
  display.textContent = count
}
