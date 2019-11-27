const person = {
    name: 'Teo',
    age: 10,
    school: { name: 'Khoa Pham' },
    sayHello: function() {
        console.log('Hello ' + this.name);
    }
};

const person2 = {
    name: 'Ti',
    age: 12,
    school: { name: 'Khoa Pham' },
    sayHello: function() {
        console.log('Hello ' + this.name);
    }
};

person2.sayHello();
// console.log(person.name);
// person.name = 'Teo Nguyen';
// console.log(person);
// person.height = 100;
// console.log(person.school.name);
