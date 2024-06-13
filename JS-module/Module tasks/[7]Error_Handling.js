class NotAnIntegerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotAnIntegerError';
    }
}

function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new NotAnIntegerError('The provided number is not an integer.');
    } else {
        console.log('The provided number is an integer.');
    }
}

try {
    checkInteger(10); 
    checkInteger(10.5); 
} catch (e) {
    if (e instanceof NotAnIntegerError) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred.');
    }
}

