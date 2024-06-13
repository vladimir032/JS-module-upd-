function delayedCallback(callback) {
    setTimeout(callback, 2000);
}

function myCallback() {
    console.log('Задержка в 2 секунды');
}

delayedCallback(myCallback);
