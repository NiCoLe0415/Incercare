class Person {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }
}

var person = new Person("John", "Gogoasa");
person.name = "Something"; //apeleaza setter pentru name
console.log(person);
console.log(person.name); //apeleaza getter pentru name

class Employee extends Person {
  constructor(name, surname, salary) {
    super(name, surname);
    this.salary = salary;
  }
}

const emp1 = new Employee("Gigi", "Duru", 3500);
const emp2 = new Employee("Gigel", "Piftel", 4500);
const emp3 = new Employee("Mita", "Biciclista", 6000);

const employees = [];
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
console.log(
  employees
    .map(employee => employee.salary)
    .reduce((total, curr) => (total += curr), 0)
);
