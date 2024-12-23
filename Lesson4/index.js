// path


//extention method
const path = require('path');

const extentionName = path.extname("test.jsx");

console.log(extentionName);

//join method

const joinName = path.join(__dirname + '/views');
console.log(joinName);

