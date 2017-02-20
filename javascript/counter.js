var app = app || {};

app.counter = /*app.createCounter();*/(function () {
    "use strict";

    var count = 0;

    /*function incrementCounter() {
        count++;
    }*/

    function getCount() {
        return count;
    }

    return {
        incrementCounter: function () {
            count++;
        },
        getCount: getCount
    };
}());


///////////////////////////////////////

//var app = app || {};
app.createCounter = (function () {
    "use strict";

    var numCounters = 0;
    
    return function () {
        var count = 0;

        /*function incrementCounter() {
            count++;
        }*/

        function getCount() {
            return count;
        }

        numCounters++;

        return {
            incrementCounter: function () {
                count++;
            },
            getCount: getCount,
            getNumCounters: function() {
                return numCounters;
            }
        };
    };
}());



var counter1 = app.createCounter(),
    counter2 = app.createCounter();

console.log(app.counter.getCount());

var i;
for (i = 0; i < 10; i++) {
    app.counter.incrementCounter();
}

for (i = 0; i < 5; i++) {
    counter1.incrementCounter();
}

for (i = 0; i < 15; i++) {
    counter2.incrementCounter();
}

console.log(app.counter.getCount(), counter1.getCount(), counter2.getCount());

console.log(counter1.getNumCounters(), ' counters');