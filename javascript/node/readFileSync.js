const fs = require('fs');

const fileContents = fs.readFileSync('readFileSync.js');
console.log('File contents:\n', fileContents.toString());
console.log('Done');