var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.showInfo = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
// Ví dụ sử dụng
var car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();
