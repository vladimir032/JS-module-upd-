function asyncOperation(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Выполнение асинхронной операции для значения", value);
            resolve(value);
        }, Math.random() * 2000); 
    });
}

async function seriesAsyncOperations(values) {
    for (let value of values) {
        await asyncOperation(value);
    }
}

const values = [1, 2, 3, 4, 5];

seriesAsyncOperations(values)
    .then(() => {
        console.log("Все асинхронные операции выполнены");
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });
