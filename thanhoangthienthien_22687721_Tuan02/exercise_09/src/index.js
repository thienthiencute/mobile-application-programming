// 9. Promise that filters even numbers from array after 1 sec
function filterEvens(arr) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(arr.filter(function (n) { return n % 2 === 0; }));
        }, 1000);
    });
}
filterEvens([1, 2, 3, 4, 5, 6]).then(function (evens) {
    return console.log("Even numbers:", evens);
});
