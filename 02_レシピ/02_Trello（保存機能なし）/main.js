const inputElement = document.getElementById("input-todo")
const container1 = document.getElementById("cards-container1")
const container2 = document.getElementById("cards-container2")
const AddButton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
inputElement.onkeydown = function () {
  if (event.key === "Enter") {
    // カードを作成する
    const card = createCard(inputElement.value)
    container1.append(card)

    // 入力欄を空にする
    inputElement.value = ""
  }
}

AddButton.onclick = function () {
  const inputElement = document.createElementById("input")
  inputElement.className = "input-todo"
  container2.append(inputElement)
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
