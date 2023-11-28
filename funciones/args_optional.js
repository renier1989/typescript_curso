"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Renier');
    console.log({ name });
})();
//# sourceMappingURL=args_optional.js.map