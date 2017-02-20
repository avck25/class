var myApp = myApp || {};

myApp.utils = (function(module) {
    "use strict";
    
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
                     "September", "October", "November", "December"];

    module.getMonthName = function(monthNumber) {
        return monthNames[monthNumber - 1];
    };

    module.getMonthNumber = function(monthName) {
        var i;
        for (i = 0; i < monthNames.length; i++) {
            if(monthNames[i] === monthName) {
                return i + 1;
            }
        }
        return -1;
    };

    return module;
}(myApp.utils || {}));