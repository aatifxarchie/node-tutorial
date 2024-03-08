const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
const t = os.uptime()
console.log(t)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem(),
}

console.log(currentOS)