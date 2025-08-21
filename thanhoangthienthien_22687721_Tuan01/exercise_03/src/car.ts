class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

// Ví dụ sử dụng
const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo(); 