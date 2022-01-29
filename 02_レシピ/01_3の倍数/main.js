let n = 0

const genkiFunction = function () {
  if (n % 3 === 0) {
    console.log(`${n}!!!!!`)
  } else {
    console.log(n)
  }
  n++
}

setInterval(genkiFunction, 1000)
