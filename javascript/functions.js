(function () {
    "use strict";

    /*function createFunction(x) {
        return function () {
            console.log(x);
        };
    }*/

    var functionsArray = [],
        i;
        //index;

    for(i = 0; i < 5; i++) {
        var index = i;
        //let index = i;
        console.log("Creating function #" + index);

        /*functionsArray[index] = function() {
            console.log(index);
        };*/

        //functionsArray[index] = createFunction(index);

        functionsArray[index] = (function (x) {
            return function () {
                console.log(x);
            };
        }(index));
    }

    functionsArray.forEach(function(element) {
        element();
    });
}());