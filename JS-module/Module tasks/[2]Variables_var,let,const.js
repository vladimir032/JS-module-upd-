function testScope() {

    var xVar = "Переменная с использованием var";
    let xLet = "Переменная с использованием let";
    const xConst = "Переменная с использованием const";


    console.log("Внутри блока:");
    console.log("xVar:", xVar);
    console.log("xLet:", xLet);
    console.log("xConst:", xConst);


    console.log("Снаружи блока:");
    console.log("xVar снаружи блока:", xVar); // Доступно
    console.log("xLet снаружи блока:", xLet); // Не доступно
    console.log("xConst снаружи блока:", xConst); // Не доступно
}

testScope();

// Попытка доступа к переменным снаружи функции
console.log("Снаружи функции:");
console.log("xVar снаружи функции:", xVar); // Не доступно
console.log("xLet снаружи функции:", xLet); // Не доступно
console.log("xConst снаружи функции:", xConst); // Не доступно
