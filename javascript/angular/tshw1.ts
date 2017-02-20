function add(x: number, y: number) {
    return x + y;
}

var a = 5,
    b = 6,
    c = 'Hello',
    d = 'World';

console.log(a, b, add(a, b));
console.log(c, d, add(c, d));

interface Book {
    title: string;
    author: string;
    subject?: string;

    read();
}

function printBook(book: Book) {
    console.log('author', book.author);
    console.log('title', book.title);
    console.log('subject', book.subject);
}

printBook({
    author: 'Me',
    title: 'What I did on my summer vacation',
    subject: 'vacation',
    read: function () { }
});

printBook({
    author: 'You',
    title: 'My title',
    subject: 5
});

class FictionBook implements Book {
    /*title: string;
    author: string;
    subject: string;*/

    constructor(public title: string, public author: string, public subject) {
        /*this.title = title;
        this.author = author;
        this.subject = subject;*/
    }

    read() {
        console.log('blah blah blah');
    }
}

console.log('a fiction book', new FictionBook('My Fiction Book', 'Me', 'Some subject'));
console.log('a fiction book', new FictionBook('My Fiction Book', 'Me', 5));