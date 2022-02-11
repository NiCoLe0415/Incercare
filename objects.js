var person = {};
person.name = "John";
person.surname = "Doe";
console.log(person);

var person1 = {};
person1.nume = "John";
person1.prenume = "Doe";
console.log(person1);

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.getDetailsNormal = function() {
  return this.surname + " " + this.name;
};

Person.prototype.getDetailsInterpolation = function() {
  return `${this.surname} ${this.name}`; //EcmaScript2015 - permite formatarea stringurilor in orice fel -> string interpolation
};

var person2 = new Person("Gigel", "Popel");
console.log(person2.getDetailsNormal());
console.log(person2.getDetailsInterpolation());

function Student(name, surname, group) {
  Person.call(this, name, surname);
  this.group = group;
}

Student.prototype = Object.create(Person.prototype); // am creat studentul pe baza prototipului persoanei
Object.defineProperty(Student.prototype, "constructor", {
  value: Student,
  enumerable: false,
  writable: true
});
console.log(Student.prototype.constructor);

Student.prototype.studentFactory = function(university) {
  var self = this;
  function signIn() {
    console.log(
      `${self.surname} ${self.name} signed in at university: ${university}`
    );
  }

  function graduate() {
    console.log(
      `${self.surname} ${self.name} signed in at university: ${university}`
    );
  }

  return {
    signIn: signIn,
    graduate: graduate
  };
};

Student.prototype.studentFactory1 = function(university) {
  var self = this;
  function signIn() {
    console.log(
      `${self.surname} ${self.name} signed in at university: ${university}`
    );
  }

  function graduate() {
    console.log(
      `${self.surname} ${self.name} signed in at university: ${university}`
    );
  }

  return {
    signIn: signIn.bind(this),
    graduate: graduate.bind(this)
  };
};

Student.prototype.studentFactory2 = function(university) {
  signIn = () => {
    //arrow function-urile nu contin this => fac binding automat
    console.log(
      `${this.surname} ${this.name} signed in at university: ${university}`
    );
  };

  graduate = () => {
    console.log(
      `${this.surname} ${this.name} signed in at university: ${university}`
    );
  };

  return {
    signIn: signIn,
    graduate: graduate
  };
};

var student = new Student("Doru", "Motoru", 1085);
student.studentFactory("ASE").signIn();
student.studentFactory1("POLI").graduate();
student.studentFactory2("UNIVERSITATE").graduate();
