//Use Promise.all() to run 3 simulated Promises in parallel and print the result.
//Sử dụng Promise.all() để chạy 3 Promise mô phỏng song song và in ra kết quả.
function simulateTask(time) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Task done"); }, time);
    });
}
// 6. Promise.all with 3 simulated Promises
Promise.all([simulateTask(500), simulateTask(1000), simulateTask(1500)]).then(function (results) { return console.log("All results:", results); });
