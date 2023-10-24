const books =[
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.6 },
    { title: '1984', author: 'George Orwell', rating: 4.0 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.7 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.5 },
    { title: 'Moby-Dick', author: 'Herman Melville', rating: 4.1 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.8 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.3 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', rating: 4.7 },
    { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.0 },
    { title: 'The Shining', author: 'Stephen King', rating: 4.2 },
    { title: 'The Da Vinci Code', author: 'Dan Brown', rating: 3.9 },
    { title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.4 },
    { title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.9 },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.5 },
    { title: 'The Odyssey', author: 'Homer', rating: 4.6 },
    { title: 'Frankenstein', author: 'Mary Shelley', rating: 4.2 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', rating: 4.1 },
    { title: 'The Road', author: 'Cormac McCarthy', rating: 4.3 },
    { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', rating: 4.7 },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', rating: 4.8 },
  ];



function filterAndTransformBooks(books, minRating) {
    const filteredBooks = books.filter(book => book.rating >= minRating);
    const selectedBooks = [];
  
    for (const book of filteredBooks) {
    selectedBooks.push({ title: book.title, author: book.author });
    }
  
    return selectedBooks;
}

const minRating = 4.5;
const result = filterAndTransformBooks(books, minRating);
console.log(result);