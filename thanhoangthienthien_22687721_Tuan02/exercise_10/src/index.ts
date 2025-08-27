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
//10.Use .finally() to log "Done" when a Promise finishes (success or failure).
getRandomNumber()
  .then((num) => console.log("Success, number:", num))
  .catch((err) => console.error("Failed:", err.message))
  .finally(() => console.log("Done"));
