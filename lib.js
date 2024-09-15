//Sep 14 create the book class(1)
class Book{
    constructor(title, author,isbn){
        this.title=title;
        this.author=author;
        this._isbn=isbn;
        this.available=true;
    }

    get isbn(){
        return this._isbn;
    }

    set isbn(newIsbn){
        this._isbn=newIsbn;
    }

    borrowBook(){
        if(this.available){
            this.available = false;
        }else{
                console.log(`Sorry,the  book "${this.title}"  is not available.`);
             }
            }

       returnBook(){
        this.available=true;
       }
      }
      //create class library 
      class Library{
        constructor(){
            this.books=[];
        }
    
        addBook(book){
            this.books.push(book);
    }
    
    removeBook(isbn){
        this.books=this.books.filter(book=>book.isbn !==isbn);
    }
        findBookByTitle(title){
         const book = this.books.find(book=>book.title===title);
         if(book){
            return book;
         }else {
                console.log(`Book titled"${title}" not foundBook`);
            }
          }
        }
//create digitallibrary class
        class DigitalLibrary extends Library{

            downloadBook(isbn){
                const book = this.books.find(book => book.isbn === isbn);
                if(book && book.available){
                    console.log(`Downloading book:"${book.title}"`);
                }else{
                    console.log(`Book with ISBN "${isbn}" is not available for download.`);
                }
               }
            }
        //usage to
        // Create some book objects
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456');
const book2 = new Book('1984', 'George Orwell', '789012');

// Create a library and add books
const library = new Library();
library.addBook(book1);
library.addBook(book2);

// Borrow a book
book1.borrowBook();

// Try to borrow the same book again (should show that it's unavailable)
book1.borrowBook();

// Return the book
book1.returnBook();

// Find a book by title
const foundBook = library.findBookByTitle('1984');
console.log(foundBook);

// Remove a book by ISBN
library.removeBook('123456');

// Create a digital library and download a book
const digitalLibrary = new DigitalLibrary();
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);
digitalLibrary.downloadBook('789012');