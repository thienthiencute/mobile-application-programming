//Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
//Viết một hàm từ chối một Promise với lỗi "Đã xảy ra sự cố" sau 1 giây.
function getError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Đã xảy ra sự cố")), 1000);
    });
}
getError().catch((err) => console.error(err.message));
