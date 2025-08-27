//Use Promise.race() to return whichever Promise resolves first.
function simulateTask(time) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Task done in ".concat(time, "ms")); }, time);
    });
}
// 7. Use Promise.race() to return whichever Promise resolves first
// Promise.race([
//   simulateTask(700),
//   simulateTask(1200),
//   simulateTask(300), // cái này nhanh nhất
// ]).then((result) => {
//   console.log("Race result:", result);
// });
// 8. Promise chain: square(2) -> double -> add 5
Promise.resolve(2)
    .then(function (n) { return n * n; }) // square
    .then(function (n) { return n * 2; }) // double
    .then(function (n) { return n + 5; }) // add 5
    .then(function (result) { return console.log("Chained result:", result); });
