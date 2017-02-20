/*var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday'];

function getDayNumber(day) {
    var i;
    for(i = 0; i < days.length; i++) {
        if(days[i] === day) {
            return i + 1;
        }
    }
}

function getDayName(number) {
    return days[number - 1];
}

console.log("getDayNumber('Saturday')", getDayNumber('Saturday'));
console.log("getDayName(7)", getDayName(7));*/

/*
var pcs_class_day_utils = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday'],

    getDayNumber: function(day) {
                    var i;
                    for(i = 0; i < this.days.length; i++) {
                        if(this.days[i] === day) {
                            return i + 1;
                        }
                    }
                  },

    getDayName: function(number) {
        return this.days[number - 1];
    }
};

console.log("pcs_class_day_utils.getDayNumber('Saturday')", pcs_class_day_utils.getDayNumber('Saturday'));
console.log("pcs_class_day_utils.getDayName(7)", pcs_class_day_utils.getDayName(7));
*/

var dayUtils = (function () {
    "use strict";
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday'];
    return {
        aNotSoPrivateProperty: "Im private",
        getDayNumber: function(day) {
                        var i;
                        for(i = 0; i < days.length; i++) {
                            if(days[i] === day) {
                                return i + 1;
                            }
                        }
                    },
        getDayName: function(number) {
            return days[number - 1];
        }
    };
}());

//var dayUtils = getDayUtils();
console.log("dayUtils.getDayNumber('Saturday')", dayUtils.getDayNumber('Saturday'));
console.log("dayUtils.getDayName(7)", dayUtils.getDayName(7));
