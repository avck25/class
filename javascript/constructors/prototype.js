(function () {
    'use strict';

    var organism = {}; //Object.create(Object.prototype);
    var animal = Object.create(organism);
    var mammal = Object.create(animal);
    var dog = Object.create(mammal);

    dog.speak = function () {
        console.log('Woof!');
    };

    dog.print = function () {
        console.log('name', this.name);
        console.log('color', this.color);
        console.log('weight', this.weight);
        console.log('type', this.type);
    };

    var spot = Object.create(dog);
    spot.name = 'Spot';
    spot.color = 'white';
    spot.weight = 25;
    spot.type = 'Poodle';

    var rover = Object.create(spot);
    rover.name = 'Rover';
    rover.color = 'black';

    spot.print();
    rover.print();
    console.log(spot, rover);

    console.log('done');
} ());