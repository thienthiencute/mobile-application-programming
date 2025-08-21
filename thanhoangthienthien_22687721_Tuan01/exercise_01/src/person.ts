function author(name: string): string {
  return `Hello, ${name}!`;
}
console.log(
  author(
    "1. Create a class Person with attributes name and age. Write a method to display this information."
  )
);
class Person{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    displayInfo(): string {
        return `Name: $(this.name), Age: $(this.age)`;
    }

}

// Vi du:
const Person1 = new Person("Than Hoang Thien Thien", 21);
const Person2 = new Person("Nguyen Phan Minh Man", 25);

console.log(Person1.displayInfo());
console.log(Person2.displayInfo());