"use strict";

function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error("Ввод должен быть неотрицательным целым числом.");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

try {
    console.log(factorial(5));
    console.log(factorial(0));
    console.log(factorial(10));
} catch (e) {
    console.error(e.message);
}
