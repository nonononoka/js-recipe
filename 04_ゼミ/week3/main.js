const aisatsu = ["おはよう", "こんにちは", "こんばんは"]
aisatsu.push("おやすみ")
aisatsu.splice(1, 1, "Hello")
console.log(aisatsu)

const newaisatsu = aisatsu.map((currentValue, index) => {
  return `${index} ${currentValue}`
})

console.log(newaisatsu)

for (let i = 0; i < aisatsu.length; i++) {
  console.log(aisatsu[i])
}

//配列の持っているプロトタイプメソッドを使って、要素を追加したり削除したりするよ
//プロトタイプメソッドとは、配列やその他のデータ型にあらかじめ備わっている関数
//1 配列や他のデータ型は最初から使える関数を持っている、それがプロトタイプメソッド
//2 いろんなプロトタイプメソッドを使っていろんな操作ができる
//"34".includes("3")は34は3を持っているか判定

//const memos = [{ text: "こんにちは", createdAt: new Date() }]

if()