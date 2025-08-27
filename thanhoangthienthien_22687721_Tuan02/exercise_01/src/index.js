// Create a Promise that returns the string "Hello Async" after 2 seconds.
function createPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello Async");
        }, 2000);
    });
}
createPromise().then(function (message) {
    console.log(message);
});
