(function () {
    'use strict';

    function makeVehicle(color) {
        return {
            color: color,
            go: function (speed) {
                this.speed = speed;
                console.log('Now going ' + this.speed);
            },
            print: function () {
                console.log(this);
                console.log('color', this.color);
                console.log('speed', this.speed);
            }
        };
    }

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log('Now going ' + this.speed);
    };

    Vehicle.prototype.print = function () {
        console.log(this);
        console.log('color', this.color);
        console.log('speed', this.speed);

        /*var that = this;
        var foo = function () {
            console.log(this, that);
        };
        foo();*/
    };

    var vc1 = new Vehicle('blue'),
        vc2 = new Vehicle('red');
    vc1.go(55);
    vc2.go(60);
    vc1.print();
    vc2.print();

    var vnc1 = makeVehicle('blue'),
        vnc2 = makeVehicle('red');
    vnc1.go(55);
    vnc2.go(60);
    vnc1.print();
    vnc2.print();

    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log('Stopped.');
    };

    vc1.stop();
    vc2.stop();

    function stop() {
        this.speed = 0;
        console.log('Stopped.');
    }

    vnc1.stop = stop;
    vnc2.stop = stop;
    vnc1.stop();
    vnc2.stop();

    function Plane(color) {
        //this.color = color;
        Vehicle.call(this, color);
        this.isPlane = true;// plane stuff here
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    //Plane.prototype.constructor = Plane;

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log('Now FLYING at ' + speed);
    };

    var p1 = new Plane('white'),
        p2 = new Plane('green');
    p1.go(400);
    p2.go(450);
    p1.print();
    p2.print();
} ());