const fs = require('fs');

let isRunning = true;

setTimeout(() => (isRunning = false));
process.nextTick(() => console.log('NEXT TICK'));

function setImmediatePromise() {
    return new Promise((resolve, rejects) => {
        setImmediate(() => resolve());
        // With resolve() we stay on the same event loop iteration
        // resolve();
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
