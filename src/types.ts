import { createCustomer, getBooksByCategoryPromise } from "./functions";
import { Author, Book, Person } from "./interfaces";

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;
export type Param4<T> = T extends (p1: infer S, p2: infer N, p3: infer B) => symbol ? [S, N, B] : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;
type P4 = Param4<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

export type BookRequiredProps = NonNullable<RequiredProps<Book>>;
export type BookOptionalProps = NonNullable<OptionalProps<Book>>;

type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
}

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

type AuthorRequiredProps = NonNullable<RequiredProps<Author>>;
type AuthorOptionalProps = NonNullable<OptionalProps<Author>>;
type AuthorRequiredPropsType = RemoveProps<Author, AuthorRequiredProps>;
type AuthorOptioalPropsType = RemoveProps<Author, AuthorOptionalProps>

type update<T extends boolean> = (condition: T) => T extends true ? string : number;

type Unpromisify<T> = T extends Promise<infer U> ? U : never;

type fnString = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;