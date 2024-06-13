function increaseByTenPercent(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 1.10;
    }
    return arr;
}


let numbers = [10, 20, 30, 40, 50];
numbers = increaseByTenPercent(numbers);
console.log(numbers);
