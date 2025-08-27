//Use Promise.race() to return whichever Promise resolves first.
function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task done in ${time}ms`), time);
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
  .then((n) => n * n) // square
  .then((n) => n * 2) // double
  .then((n) => n + 5) // add 5
  .then((result) => console.log("Chained result:", result));