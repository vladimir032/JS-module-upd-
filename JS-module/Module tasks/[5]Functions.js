function repeatOperation(operation, interval, times) {
    let count = 0;
    const intervalId = setInterval(() => {
        if (count >= times) {
            clearInterval(intervalId);
        } else {
            operation();
            count++;
        }
    }, interval);
}


const operation = () => {
    console.log('Операция выполнена');
};

repeatOperation(operation, 1000, 5);  // Выполнить операцию 5 раз с интервалом в 1 секунду
