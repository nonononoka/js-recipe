const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice = document.getElementById("choice")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この探偵の名前は何でしょう？",
  image: "sherlock-holmes.png",
  choices: [
    {
      text: "シャーロックホームズ",
      feedback: "正解！",
    },
    {
      text: "エスキュールポアロ",
      feedback: "残念！",
    },
    {
      text: "ミスマーブル",
      feedback: "残念！",
    },
    {
      text: "ソーンダイク博士",
      feedback: "残念！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  const choice1 = document.createElement("button")
  const choice2 = document.createElement("button")
  const choice3 = document.createElement("button")
  const choice4 = document.createElement("button")

  choice1.className = "choice1"
  choice2.className = "choice2"
  choice3.className = "choice3"
  choice4.className = "choice4"

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text

  choice.append(choice1)
  choice.append(choice2)
  choice.append(choice3)
  choice.append(choice4)
  // choiceNumber番目の選択肢を選択
  const choose = function (choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }

  choice1.onclick = function () {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function () {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function () {
    // 2 番目の選択肢を選択
    choose(2)
  }
  choice4.onclick = function () {
    // 2 番目の選択肢を選択
    choose(3)
  }
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
