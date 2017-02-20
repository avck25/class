"use strict";

var name = "Hillary Clinton";
var email = "hclinton@clinton.com";

function printPerson() {
    console.log("Name:", this.name, "Email:", this.email);
}

var person = {
    name: "Donald Trump",
    email: "dtrump@trump.com",
    print: function () {
        console.log("Name:", this.name, "Email:", this.email);
    } /* printPerson */
};

person.print();
//printPerson();

var personsPrint = person.print;
//personsPrint();

var person2 = {
    name: "Chris Christie",
    email: "cchristie@nj.gov",
    print: function () {
        console.log("Name:", this.name, "Email:", this.email);
    } /* printPerson */
};

person2.print();

////////////////////////
var greeting = "Hello there";

function greet(name) {
    console.log(this.greeting  + " " + name);
}

//greet("Donald");

var greeter1 = {
    greeting: "How do you do"
};

var greeter2 = {
    greeting: "Shalom"
};

greet.call(greeter1, "Donald");
greet.apply(greeter2, ["Hillary"]);

////////////////////////

person2.print.call(person);
person.print.call(person2);

printPerson.call(person);

var myWierdObject = {
    forEach: function() {
        console.log("My foreach called");
    }
};

myWierdObject.forEach();
Array.prototype.forEach.call(myWierdObject, function(element) {
    console.log(element);
});

var printTrump = printPerson.bind(person);

printTrump();

var sayShalomToTheDonald = greet.bind(greeter2, "Donald");

sayShalomToTheDonald();
