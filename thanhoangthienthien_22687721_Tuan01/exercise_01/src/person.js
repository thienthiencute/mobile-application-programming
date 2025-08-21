function author(name) {
    return "Hello, ".concat(name, "!");
}
console.log(author("1. Create a class Person with attributes name and age. Write a method to display this information."));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayInfo = function () {
        return "Name: $(this.name), Age: $(this.age)";
    };
    return Person;
}());
// Vi du:
var Person1 = new Person("Than Hoang Thien Thien", 21);
var Person2 = new Person("Nguyen Phan Minh Man", 25);
console.log(Person1.displayInfo());
console.log(Person2.displayInfo());
