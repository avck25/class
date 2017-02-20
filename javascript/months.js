var monthUtils = (function() {
    "use strict";

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
                     "September", "October", "November", "December"];

    function getMonthName(monthNumber) {
        return monthNames[monthNumber - 1];
    }

    return {
        getMonthName: getMonthName,
        getMonthNumber: function(monthName) {
            var i;
            for (i = 0; i < monthNames.length; i++) {
                if(monthNames[i] === monthName) {
                    return i + 1;
                }
            }
            return -1;
        }
    };
}());

var monthName = monthUtils.getMonthName(3);
console.log("monthUtils.getMonthName(3)", monthName);

var monthNumber = monthUtils.getMonthNumber(monthName);
console.log("monthUtils.getMonthNumber('" + monthName + "')", monthNumber);