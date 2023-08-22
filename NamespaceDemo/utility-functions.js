/// <reference path="utility-functions.ts">
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 20;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunction() {
        console.log("this is a private function");
    }
})(Utility || (Utility = {}));
