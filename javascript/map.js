(function() {
    "use strict";

    function ourMap(theArray, mapper){
        var mappedElements = [];
        theArray.forEach(function(element) {
            mappedElements.push(mapper(element));
        });
        return mappedElements;
    }

    var myNumbers = [2,4,6,8,10],
        doubledNumbers = ourMap(myNumbers, function (number) {
            return number * 2;
        });
    console.log(myNumbers, 'doubled', doubledNumbers);

    /*if(! Array.prototype.map) {
        Array.prototype.map = ourMap;
    }*/
}());