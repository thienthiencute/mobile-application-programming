// 9. Promise that filters even numbers from array after 1 sec
function filterEvens(arr: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr.filter((n) => n % 2 === 0));
    }, 1000);
  });
}
filterEvens([1, 2, 3, 4, 5, 6]).then((evens) =>
  console.log("Even numbers:", evens)
);

