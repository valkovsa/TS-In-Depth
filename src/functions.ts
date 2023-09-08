import { Category } from "./enums";
import { Book, Callback, LibMgrCallback, TOptions } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";
import RefBook from "./classes/encyclopedia";

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

export function getAllBooks(): readonly Book[] {

    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true
        },
        {
            id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false
        },
        {
            id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true
        },
        {
            id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true
        }
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    const firstAvailableName = books.find(b => b.available === true)?.title;
    console.log(`count books: ${numberOfBooks}, first available book name: ${firstAvailableName}`);
}

export function getBookTitlesByCategory(catogory: Category = Category.JavaScript): string[] {

    const books = getAllBooks();
    return books.filter(book => book.category === catogory).map(({ title }) => title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    // const { title, author } = books[index];
    // ?? - null or undefined
    const { title, author } = books[index] ?? {} as Book;
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook)
    }, 0n);

    return result;
}

export function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    age && console.log(`Customer name: ${age}`);
    city && console.log(`Customer name: ${city}`);
}

export function getBookByID(id: Book["id"]): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIds: number[]) {
    console.log(`Customer name: ${customer}`);

    return bookIds
        .map(id => getBookByID(id))
        .filter(book => book?.available)
        // .map(({ title }) => title);
        // .map(book => book!.title);
        .map(book => book?.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: any[]): string[] {
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === "string") {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        }
        else if (typeof arg === "boolean") {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }


    }
    if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === "number" && typeof available === "boolean") {
            return books.filter(book => book.id === id && book.available === available).map(({ title }) => title);
        }
    }

    return [];
}

export function assertCondition(condition: any): asserts condition {
    if (!condition) {
        throw new TypeError("");
    }
}

export function assertValue(val: any): asserts val is string {
    if (typeof val !== "string")
        throw new Error("");

}

/// + objects insted of value
export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== "string")
        throw new Error("value should have been a string");
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data);
    (data as RefBook).printItem();
}

export function printBook(book: Book) {

    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === "function") {
        return (book[prop] as Function).name;
    } else {
        return book[prop];
    }
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error("It is not an instance of RefBook");
    }
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

//                                  по формі                по перерахунку
export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === "function") {
        return (obj[prop] as Function).name;
    } else {
        return obj[prop];
    }
}

type UpdateResult<T> = T extends true ? string : number;

export function update<T extends boolean>(param: T): UpdateResult<T> {
    if (param) {
        return "abc" as UpdateResult<T>;
    }
    return 10 as UpdateResult<T>;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error("No books was found");
            }
        } catch (err: any) {
            callback(err, null)
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

// export function getBooksByCategory(category: Category, callback: Callback<string[]>) {}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject("No books was found");
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResults(catogory: Category) {
    const result: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(catogory);
    console.log(result.length);
}