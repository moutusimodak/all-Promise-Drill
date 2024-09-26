/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


console.log("Program started");
const promiseTask = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve()


    }, 3000)
})

console.log("Promise while pending:", promiseTask);
console.log("Program in progress...");

promiseTask.then(() => {
    console.log("Program complete");
});
