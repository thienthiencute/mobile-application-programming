//Write a function that returns a Promise resolving with the number 10 after 1 second.
//Viết một hàm trả về một Promise giải quyết với số 10 sau 1 giây.
function getNumber() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(10); }, 1000);
    });
}
getNumber().then(console.log);
