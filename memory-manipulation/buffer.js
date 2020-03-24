// ? Basic buffer manipulation example

let buffer = Buffer.alloc(26) //reserve space for the 26 letter in the english alphabet
console.log(buffer)

buffer.forEach((hex,i) => { // when we add 97 + i we get the ascii code for each letter
    buffer[i] = i + 97
})
console.log(buffer)

const abc = buffer.toString() // we convert each ascii code into text

console.log(abc)