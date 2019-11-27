// function Person(name) {
    // this.name = name;
    // this.sayHello = function() {
    //     console.log(`Xin chao toi la ${this.name}`);
    // }
// }

class School {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    sayHello() {
        console.log(`Xin chao toi la ${this.name},
        toi ${this.age} tuoi, hoc truong ${this.school.name}`);
    }
}
const school = new School('Khoa Pham');
const teo = new Person('Teo', 10, 1);
const ti = new Person('Ti', 12, school);

teo.sayHello();
ti.sayHello();
