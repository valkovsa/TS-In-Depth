/* eslint-disable no-redeclare */

import * as Interfaces from '../interfaces';

class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    name!: string;
    email!: string;
    department!: string;

    a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle} `);
    }
}

export { UniversityLibrarian }