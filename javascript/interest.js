var interestCalculator = (function () {
    "use strict";
    
    var rate;
    var years;

    function calculate(amount) {
        var i;
        for(i = 0; i < years; i++) {
            amount += (amount * (rate / 100));
        }
        return amount;
    }

    return {
        setRate: function(theRate) {
            rate = theRate;
            return this;
        },
        setYears: function( theYears) {
            years = theYears;
            return this;
        },
        calculateInterest: calculate
    };
}());

interestCalculator.setYears(2);
interestCalculator.setRate(10);
console.log('Final amount', interestCalculator.calculateInterest(100));

console.log('Chaining', interestCalculator.setYears(2).setRate(10).calculateInterest(100));