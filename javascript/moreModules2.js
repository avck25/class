var myApp = (function(theModule) {
    "use strict";

    theModule.functionC = function () {
        console.log("Function C called", theModule.notSoPrivateData);// module1PrivateData);
    };
        
    theModule.functionD = function () {
        console.log("Function D called", theModule.notSoPrivateData);// module1PrivateData);
    };

    return theModule;
}(myApp || {}));

myApp.functionC();
myApp.functionD();