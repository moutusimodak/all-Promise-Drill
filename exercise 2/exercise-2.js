/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/


console.log("program started");
const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve()
    },3000)
})

console.log("program's current state is :", promiseOne);

console.log("Program in progress...");

promiseOne.then(()=>{
    console.log("Step 1 complete");
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Step 2 complete")
        }, 3000)
    })
})
.then((message)=>{
    console.log("second promise is printed after 3 sec");
    console.log(message);
    
    
})
.catch((error) => {
    console.error("Error:", error);
});

