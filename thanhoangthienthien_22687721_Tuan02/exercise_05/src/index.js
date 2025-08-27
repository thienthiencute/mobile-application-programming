//Create a function simulateTask(time) that returns a Promise resolving with "Task
//done" after time ms.
//Tạo một hàm simulateTask(time) trả về một Promise giải quyết với "Nhiệm vụ đã hoàn thành" sau time ms.
function simulateTask(time) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Task done"); }, time);
    });
}
simulateTask(1000).then(function (msg) { return console.log("Bài 5:", msg); });
