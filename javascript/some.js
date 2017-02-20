function some(array, test) {
    var passed = false;
    array.forEach(function(element) {
        if(test(element)) {
            passed = true;
        }
    });
    return passed;
    //var i;
    //for(i = 0; i < array.length; i++) {
        //if(test(array[i])) {
            //return true;
        //}
    //}
    //return false;
}

function isUpperCase(letter) {
    return letter.toUpperCase() === letter;
}

function isLowerCase(letter) {
    return !isUpperCase(letter);
}

var uppercaseOnly = ['A','B','C'],
    lowercaseOnly = ['a','b','c'],
    mixed = ['A','b','C'];

console.log(uppercaseOnly, 'some(uppercaseOnly, isUpperCase)', some(uppercaseOnly, isUpperCase));
console.log(lowercaseOnly, 'some(lowercaseOnly, isUpperCase)', some(lowercaseOnly, isUpperCase));
console.log(mixed, 'some(mixed, isUpperCase)', some(mixed, isUpperCase));

console.log(uppercaseOnly, 'some(uppercaseOnly, isLowerCase)', some(uppercaseOnly, isLowerCase));
console.log(lowercaseOnly, 'some(lowercaseOnly, isLowerCase)', some(lowercaseOnly, isLowerCase));
console.log(mixed, 'some(mixed, isLowerCase)', some(mixed, isLowerCase));

console.log('Using built in some');

console.log(uppercaseOnly, 'uppercaseOnly.some(isUpperCase)', uppercaseOnly.some(isUpperCase));
console.log(lowercaseOnly, 'lowercaseOnly.some(isUpperCase)', lowercaseOnly.some(isUpperCase));
console.log(mixed, 'mixed.some(isUpperCase)', mixed.some(isUpperCase));

console.log(uppercaseOnly, 'uppercaseOnly.some(isLowerCase)', uppercaseOnly.some(isLowerCase));
console.log(lowercaseOnly, 'lowercaseOnly.some(isLowerCase)', lowercaseOnly.some(isLowerCase));
console.log(mixed, 'mixed.some(isLowerCase)', mixed.some(isLowerCase));


function onlyIf(array, test, action) {
    var i;
    for(i = 0; i < array.length; i++) {
        if (test(array[i])) {
           action(array[i]);
        }
    }
    //array.forEach(function(element) {
        //if (test(element)) {
           //action(element);
        //}
    //});
}

function printIt(it) {
    console.log(it);
}

console.log(mixed, 'onlyIf(mixed, isUpperCase, printIt)');
onlyIf(mixed, isUpperCase, printIt);

console.log(mixed, 'onlyIf(mixed, isLowerCase, printIt)');
onlyIf(mixed, isLowerCase, printIt);