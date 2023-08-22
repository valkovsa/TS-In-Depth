/* eslint-disable no-redeclare */

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log(`Creating a new ReferenceItem...`);
    // }

    private _publisher: string = "";

    #id: number;

    static department: string = "Classical dep.";

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
        console.log(`Creating a new ReferenceItem...`);
    }

    getId(): number {
        return this.#id;
    }

    printItem() {
        console.log(`title was published in year`);
        console.log(`${ReferenceItem.department}`);
        // console.log(Object.getPrototypeOf(this).constructor.department);
        // console.log((this.constructor as any).prototype.constructor.department);
    }

    abstract printCitation(): void;
}

export { ReferenceItem }