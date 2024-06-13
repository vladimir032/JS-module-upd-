async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Замените URL на ваше API
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}

async function processData() {
    try {
        const data = await fetchData();
        console.log('Полученные данные:', data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

processData();
