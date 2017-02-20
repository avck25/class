interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

var user = {
    firstName: 'Barack',
    lastName: 'Obama'
};

document.body.innerHTML = greeter('Joe');//user);//[1, 2, 3]);//user);