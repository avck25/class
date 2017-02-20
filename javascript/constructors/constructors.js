(function () {
    'use strict';

    var p = {
        first: 'Donald',
        last: 'Trump',
        print: function () {
            console.log(this.first + ' ' + this.last);
        }
    };

    function createPerson(first, last) {
        return {
            first: first,
            last: last,
            print: function () {
                console.log(this.first + ' ' + this.last);
            }
        };
    }

    p.print();
    console.log(p);

    var b = createPerson('Bernie', 'Sanders');
    b.print();
    console.log(b);

    var h = createPerson('Hillary', 'Clinton');
    h.print();
    console.log(h);

    function Person(first, last) {
        this.first = first;
        this.last = last;
        /*this.print = function () {
            console.log(this.first + ' ' + this.last);
        };*/
    }

    Person.prototype.print = function () {
        console.log(this.first + ' ' + this.last);
    };

    var constructorPerson = new Person('Chris', 'Christie');
    constructorPerson.print();
    console.log(constructorPerson);

    /*var badlyConstructorPerson = Person('Jared', 'Kushner');
    badlyConstructorPerson.print();
    console.log(badlyConstructorPerson);*/

    console.log(constructorPerson.foo);
    Person.prototype.foo = 50;
    console.log(constructorPerson.foo);

    function Employee(first, last, department) {
        this.first = first;
        this.last = last;
        this.department = department;

        // return { foo: 'bar' };
    }

    Employee.prototype = /*Person.prototype;*/ /*new Person('foo', 'bar')*/ Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;
    Employee.prototype.print = function () {
        console.log(this.first + ' ' + this.last + ' ' + this.department);
    };

    var e = new Employee('Barack', 'Obama', 'President');
    e.print();
    console.log(e);

    var e2 = new Employee('Joe', 'Biden', 'Vice President');
    e2.print();
    console.log(e2);

    constructorPerson.print();

    console.log('e instanceof Person', e instanceof Person);
    console.log('e instanceof Employee', e instanceof Employee);

    var anotherPerson = new constructorPerson.constructor();
    var anotherEmployee = new e.constructor();

    console.log(anotherPerson);
    console.log(anotherEmployee);
} ());