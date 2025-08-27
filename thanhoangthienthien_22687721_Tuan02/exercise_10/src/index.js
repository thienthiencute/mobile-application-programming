function getRandomNumber() {
    return new Promise(function (resolve, reject) {
        var num = Math.random();
        setTimeout(function () {
            if (num > 0.2)
                resolve(num);
            else
                reject(new Error("So qua nho"));
        }, 1000);
    });
}
getRandomNumber()
    .then(function (num) { return console.log("So ngau nhien:", num); })
    .catch(function (err) { return console.error(err.message); });
//10.Use .finally() to log "Done" when a Promise finishes (success or failure).
getRandomNumber()
    .then(function (num) { return console.log("Success, number:", num); })
    .catch(function (err) { return console.error("Failed:", err.message); })
    .finally(function () { return console.log("Done"); });
