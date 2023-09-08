import { positiveInteger, timeout } from "../decorators";
import { ReferenceItem } from "./ReferenceItem";


export default class extends ReferenceItem {
    private _copies: number = 0;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(id: number, public override title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    @timeout(5000)
    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    override printCitation(): void {
        console.log(`title: ${this.title} - year ${this.year}`);
    }
}