const seisekibo = [
    { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
    { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
    { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
  ]

const undoudekiru = seisekibo.findIndex(fuction(obj){
    return obj.taiiku>=3
})

