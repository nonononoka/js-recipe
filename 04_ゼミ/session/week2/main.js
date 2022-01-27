const Addbutton = document.getElementById("add-button")
const MemoInput = document.getElementById("memo-input")
const MemoContainer = document.getElementById("memo-container")

Addbutton.onclick = function () {
  const memo = document.createElement("div")
  const DeleteButton = document.createElement("button")
  Add(MemoInput, memo)
  Delete(memo, DeleteButton)
}

const Add = function (input, content) {
  content.textContent = input.value
  MemoContainer.append(content)
  input.value = ""
}

const Delete = function (content, Button) {
  Button.className = "delete"
  Button.textContent = "削除"
  content.append(Button)
  Button.onclick = function () {
    content.remove()
  }
}
