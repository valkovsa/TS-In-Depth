import { Category } from "./enums";

interface Book {
    id: number,
    title: string,
    category: Category,
    author: string,
    available: boolean,
    pages?: number,
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;

};

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}
interface A {
    a: number;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string,
    publisher: string
}

interface ShelfItem {
    title: string;
}

export {
    A,
    Author,
    Book,
    DamageLogger as Logger,
    Librarian,
    Person,
    TOptions,
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}