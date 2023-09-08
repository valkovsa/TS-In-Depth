/* eslint-disable no-redeclare */

import { format, freeze, logger, writable } from "../decorators";
import * as Interfaces from '../interfaces';

// @freeze('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian, Interfaces.A {
    @format()
    accessor name!: string;
    email!: string;
    department!: string;

    a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle} `);
    }

    @writable(true)
    assistFaculty(): void {
        console.log("Assist faculty");
    }

    @writable(false)
    teachCommunity(): void {
        console.log("Teaching community");
    }
}

export { UniversityLibrarian }