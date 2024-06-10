function compareObjects(obj1, obj2) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        // Если свойство не существует во втором объекте или значения свойств не равны, объекты не эквивалентны
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// Пример использования функции
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a: 1, b: 2, c: 3};
const obj3 = {a: 1, b: 2, c: 4};

console.log(compareObjects(obj1, obj2)); // Вывод: true (объекты эквивалентны)
console.log(compareObjects(obj1, obj3)); // Вывод: false (объекты не эквивалентны)
