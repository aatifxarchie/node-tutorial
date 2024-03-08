const fs = require('fs')

const first = fs.readFileSync('./content/subfolder/first.txt','utf8')
const second = fs.readFileSync('./content/subfolder/second.txt','utf8')

console.log(first)
console.log(second)

fs.writeFileSync('./content/subfolder/third.txt',`The message is ${first + second}`,{flag : 'a'})

console.log('done with this task')
console.log('starting with the next one')