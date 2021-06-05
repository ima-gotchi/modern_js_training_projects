const firstName = 'Justin';
const lastName = 'Perez';
const age = 28
const str = 'Hello there my name is Justin';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';

// Escaping
val = 'That\'s awesome, I can\'t wait.';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

// indexOf()
val = lastName.indexOf('e');
val = lastName.lastIndexOf('e');

// charAt()
val = lastName.charAt('2');
// Get last char
val = lastName.charAt(lastName.length - 1);

// substring()
val = lastName.substring(0, 4);

// slice
val = lastName.slice(0, 4);
val = lastName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('Justin', 'Mr. ' + lastName);

// includes()
val = str.includes('Hello');
val = str.includes('foo');

console.log(val);