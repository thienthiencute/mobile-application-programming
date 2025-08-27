// Create a Promise that returns the string "Hello Async" after 2 seconds.
// Tạo một Promise trả về chuỗi "Hello Async" sau 2 giây.
function createPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000); 
  });
}


createPromise().then((message: string) => {
  console.log(message); 
});