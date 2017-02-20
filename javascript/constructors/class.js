(function () {
    'use strict';

    class ClassCar {
        drive() {
            console.log('Vroom Vroom...');
        }
    }

    function ConstructorCar() { }

    ConstructorCar.prototype.drive = function () {
        console.log('Vroom Vroom...');
    };

    var carPrototype = {
        drive: function () {
            console.log('Vroom Vroom...');
        }
    };

    function createCar() {
        return Object.create(carPrototype);
    }

    var classCar = new ClassCar();
    classCar.drive();
    console.log(classCar);

    var constructorCar = new ConstructorCar();
    constructorCar.drive();
    console.log(constructorCar);

    var factoryCar = createCar();
    factoryCar.drive();
    console.log(factoryCar);
} ());