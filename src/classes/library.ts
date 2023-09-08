import { setInitial } from "../decorators";

export class Library {
    @setInitial(1)
    Id: number = 0;
    name!: string;
    address!: string;
}