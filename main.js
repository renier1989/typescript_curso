"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length < 3) ? false : true;
    };
    const validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Re'));
//# sourceMappingURL=main.js.map