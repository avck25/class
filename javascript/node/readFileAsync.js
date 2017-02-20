const fs = require('fs');

/*
readFile(fileName, callback) {
    ....
    if(callback) {
        callback(err, data);
    }
}
*/
fs.readFile('readFileAsync.js', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File Contents:\n', data.toString());
    }
});

console.log('Done');