const fs = require('fs')

console.log('start')
fs.readFile('./content/subfolder/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return;
    }
    // console.log(result)
    const first = result;
    fs.readFile('./content/subfolder/first.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        fs.writeFile('./content/subfolder/async.txt',`The content is ${first + second}`,(err,result) => {
            if(err){
                console.log(error)
                return;
            }
            else{
                console.log('done with thiis task')
            }
        })
    })
})

console.log('starting the next one')