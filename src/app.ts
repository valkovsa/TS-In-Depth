import { RefBook, UL } from "./classes";
import { Category } from "./enums";
import { A, Author, Book, Librarian, Logger, TOptions, Magazine } from "./interfaces";
import { PersonBook } from "./types";
import { Library, Shelf } from "./classes";
import {
    bookTitleTransform, calcTotalPages, createCustomer, createCustomerID, getAllBooks,
    getBookAuthorByIndex, getBookTitlesByCategory, getObjectProperty, getProperty, getTitles, logBookTitles,
    logFirstAvailable, printBook, printRefBook, purge, setDefaultConfig, showHello, сheckoutBooks
} from "./functions";

// showHello('greeting', 'TypeScript');
// alias | typed literal
// type Book = { id: number, title: string, category: Category, author: string, available: boolean };

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// logBookTitles(getBookTitlesByCategory(Category.Angular));
// logBookTitles(getBookTitlesByCategory(Category.HTML));

// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());
//-------------------------------------------------------

// const myId = createCustomerID("Ann", 10);
// console.log(`myId: ${myId}`);

// let idGenerator: typeof createCustomerID =  //(name: string, id: number) => string =
//     (name: string, id: number) => `${id}/${name}`;

// idGenerator = createCustomerID;
// console.log(idGenerator("boris", 10));

// createCustomer("Anna");
// createCustomer("Anna", 20);
// createCustomer("Anna", 30, "Kyiv");

// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());

// function getBookByID(id: number): Book | undefined {
//     const books = getAllBooks();
//     return books.find(book => book.id === id);
// }


// console.log(сheckoutBooks("Ann", ...[2]));

// Дженерик исполюзуется для выполнения одного и того же кода для разных типов
// Перегрузка используется для выполнения разного кода в зависимости от типов

// console.log(getTitles(true));

// const check: (value: any) => asserts value is string (value: any) => {
//     if (typeof value !== "string")
//         throw new Error("value should have been a string");
// }

// console.log(bookTitleTransform("abcde"));
// console.log(bookTitleTransform(123));

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged(reason: string): void {
        console.log(`Damaged: ${reason}`);
    }
}

// printBook(myBook);
// myBook.markDamaged?.('missing back cover');

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('!!!');

// const favoriteAuthor: Author = {
//     name: "Anna",
//     email: "anna@gmail.com",
//     numBooksPublished: 3
// };

// const favoriteLibrarian: Librarian = {
//     name: "Boris",
//     email: "boris@gmail.com",
//     department: "Classic literature",
//     assistCustomer: (custName: string, title: string) => console.log(`${custName} - ${title}`)
// };

// 4.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// console.log(offer.book.authors?.[0]?.name);

// 4.05
// console.log(getProperty(myBook, "title"));
// console.log(getProperty(myBook, "markDamaged"));
// console.log(getProperty(myBook, "isbn"));

//05 Classes

// 5.01
// const ref = new ReferenceItem(1, "title", 2015);
// ref.printItem();
// console.log(ref);
// ref.publisher = "abc";
// console.log(`${ref.publisher}`);
// console.log(`${ref.getId()}`);

// 5.02
// console.log(`------------------------------------`);

// const refBook = new Encyclopedia(1, "Learn TS", 2023, 2);
const refBook = new RefBook(1, "Learn TS", 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// console.log(`---------------------------------------`);

// const favoriteLibrarian1: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian1.name = "Boris";
// favoriteLibrarian1.assistCustomer("Anna", "Learn TS");
// console.log(favoriteLibrarian1);

// const favoriteLibrarian2: A & Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian2.a;

// console.log(`---------------------------------------`);

// 5.05
const personBook: PersonBook = {
    name: "Anna",
    email: "anna@gmail.com",
    id: 1,
    author: "me",
    available: true,
    category: Category.Angular,
    title: "learn angular"
}

// console.log(personBook);

let options: TOptions = {};
options = setDefaultConfig(options);
// console.log(options);

// 06.03
// printRefBook(new RefBook(1, "learn TS", 2023));
// printRefBook(UniversityLibrarian);
// printRefBook(new RefBook(1, "Learn Type Script", 2023, 2))

// 06.05
const flag = true;
if (flag) {
    import("./classes")
        .then(module => {
            const reader = new module.Reader();
            reader.name = "Serg";
            console.log(reader);
        });
}

if (flag) {
    const module = await import("./classes")
    const reader = new module.Reader();
    reader.name = "Serg";
    // console.log(reader);
}


//6.06
// let library: Library = new Library();
let library: Library = {
    Id: 1,
    name: "Name",
    address: "Kyiv"
}


//7.01
const inventory = [
    {
        id: 10,
        title: 'The C Programming Language',
        author: 'K & R',
        available: true,
        category: Category.Software
    },
    {
        id: 11,
        title: 'Code Complete',
        author: 'Steve McConnell',
        available: true,
        category: Category.Software
    },
    {
        id: 12,
        title: '8-Bit Graphics with Cobol',
        author: 'A. B.',
        available: true,
        category: Category.Software
    }, {
        id: 13,
        title: 'Cool autoexec.bat Scripts!',
        author: 'C. D.',
        available: true,
        category: Category.Software
    }
];

// const r1 = purge(inventory)
// console.log(r1);

// const r2 = purge([1, 2, 3, 4])
// console.log(r2);

// const purgeNumbers = purge<number>;
// console.log(purgeNumbers([1, 2, 3, 4]));
// console.log(purgeNumbers(["A","B","C","D"]));

// 7.02

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst().title);

//7.03
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));

const obj = new Shelf();
obj.getFirst();

console.log(getObjectProperty(magazines[0], "title"));
console.log(getObjectProperty(magazines[0], "publisher"));
console.log(getObjectProperty(getAllBooks()[0], "markDamaged"));
// console.log(getObjectProperty(getAllBooks()[0], "isbn"));
console.log(getObjectProperty(getAllBooks()[0], "title"));

