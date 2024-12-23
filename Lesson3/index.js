//os, path

//userInfo Method

const os = require('os');

console.log(os.userInfo());

//home directory

console.log(os.homedir());

//host name
console.log(os.hostname());

//total-memory
console.log(os.totalmem());

//free memory
console.log(os.freemem());



// if i want to use only 2/3 memory then we can set the method name only in the starting part like: we want to use only freemem and totalmem then i can use in firt -> const {totalmem, freemem} = require("os")