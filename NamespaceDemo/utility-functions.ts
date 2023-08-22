/// <reference path="utility-functions.ts">

namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }

    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 20;
    }

    function privateFunction(): void {
        console.log(`this is a private function`);
    }
}