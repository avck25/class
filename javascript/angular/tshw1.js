function add(x, y) {
    return x + y;
}
var a = 5, b = 6, c = 'Hello', d = 'World';
console.log(a, b, add(a, b));
console.log(c, d, add(c, d));
function printBook(book) {
    console.log('author', book.author);
    console.log('title', book.title);
    console.log('subject', book.subject);
}
printBook({
    author: 'Me',
    title: 'What I did on my summer vacation',
    subject: 'vacation'
});
printBook({
    author: 'You',
    title: 'My title',
    subject: 5
});
var FictionBook = (function () {
    /*title: string;
    author: string;
    subject: string;*/
    function FictionBook(title, author, subject) {
        this.title = title;
        this.author = author;
        this.subject = subject;
        /*this.title = title;
        this.author = author;
        this.subject = subject;*/
    }
    return FictionBook;
}());
console.log('a fiction book', new FictionBook('My Fiction Book', 'Me', 'Some subject'));
console.log('a fiction book', new FictionBook('My Fiction Book', 'Me', 5));
