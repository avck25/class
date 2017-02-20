var myApp = (function(theModule) {
    "use strict";

    //var module1PrivateData = "Im private in module 1";
    theModule.notSoPrivateData = "Im not so private data in module 1";

    theModule.functionA = function () {
        console.log("Function A called", theModule.notSoPrivateData);//module1PrivateData);
    };

    theModule.functionB = function () {
        console.log("Function B called", theModule.notSoPrivateData);//theModule.module1PrivateData);
    };

    return theModule;
}(myApp || {}));

myApp.functionA();
myApp.functionB();

/*
var x  = 1;
var y  = 5;
var z = x || y;
console.log(z);
*/
