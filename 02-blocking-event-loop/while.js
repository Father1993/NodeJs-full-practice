let isRunning = true;

setTimeout(() => (isRunning = false), 0);
process.nextTick(() => console.log('NEXT TICK'));
while (isRunning) {
    console.log('While loop is running...');
}
