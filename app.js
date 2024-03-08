// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm  i <packageName>

// global dependeny - use it in my project
// npm install -g <packageName>
// sudo install -g <pckageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.log in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newitems = _.flattenDeep(items)
console.log(items,newitems)

