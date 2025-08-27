//Create a function simulateTask(time) that returns a Promise resolving with "Task
//done" after time ms.
//Tạo một hàm simulateTask(time) trả về một Promise giải quyết với "Nhiệm vụ đã hoàn thành" sau time ms.
function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}
simulateTask(1000).then((msg) => console.log("Bài 5:", msg));