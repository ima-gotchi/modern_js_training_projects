const person = {
    firstName: 'Justin',
    lastName: 'Perez',
    age: 28,
    email: 'justin@aol.com',
    hobbies: ['fishing', 'programming', 'hiking', 'video games'],
    address: { 
        city: 'Atlanta',
        state: 'GA'
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Jake', age: 45},
    {name: 'Lucy', age: 29},
    {name: 'Bob', age: 34}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}