class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Phương thức hiển thị thông tin sách
  displayInfo(): string {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}


const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

console.log(book1.displayInfo());
console.log(book2.displayInfo());
