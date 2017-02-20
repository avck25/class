//console.log(process.argv);

let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    sum += /*+process.argv[i];*/Number(process.argv[i]);
}
console.log(sum);