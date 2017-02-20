var myModule = (function () {
    "use strict";
    
    var myData = "This is my module";

    function privateFunction() {
        console.log(myData + " privateFunction");
    }

    return {
        functionOne: function() {
            console.log(myData);
        },
        functionTwo: function() {
            console.log(myData + " 2");
            privateFunction();
        },
        youCanHaveThis: privateFunction
    };
}());

myModule.functionOne();