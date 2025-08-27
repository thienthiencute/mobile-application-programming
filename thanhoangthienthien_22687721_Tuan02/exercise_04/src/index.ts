//Use .then() and .catch() to handle a Promise that returns a random number.
function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    setTimeout(() => {
      if (num > 0.2) resolve(num);
      else reject(new Error("So qua nho"));
    }, 1000);
  });
}
getRandomNumber()
  .then((num) => console.log("So ngau nhien:", num))
  .catch((err) => console.error(err.message));