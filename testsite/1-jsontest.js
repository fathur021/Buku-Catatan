const fs = require('fs');


const dataBuffer = fs.readFileSync('1-jsontest.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
