(function() {
    "use strict";

    function createAccount(openingBalance) {
        return {
            balance: openingBalance
        };
    }

    var accountOne = createAccount(500),
        accountTwo = createAccount(1000);

    /*var accountOne = {
            balance: 500
        },
        accountTwo = {
            balance: 1000
        };*/

    function addInterest(interest) {
        this.balance += interest;
    }  

    //addInterest(500);

    addInterest.call(accountOne, 10);
    addInterest.apply(accountTwo, [20]);
        
    var addFiveDollarsInterestToAccountOne = addInterest.bind(accountOne, 5);
    addFiveDollarsInterestToAccountOne();

    console.log(accountOne, accountTwo);
}());