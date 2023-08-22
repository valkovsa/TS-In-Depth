import { ReferenceItem } from "./ReferenceItem";


export default class extends ReferenceItem {
    constructor(id: number, public override title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    override printCitation(): void {
        console.log(`title: ${this.title} - year ${this.year}`);
    }
}