// FUNCTION DECLARATIONS

function greet(firstName = 'Justin', lastName = 'Perez'){
    // if(typeof firstName === 'undefined'){firstName = 'Justin'}
    // if(typeof lastName === 'undefined'){lastName = 'Perez'}
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
};

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x * x;
};

// console.log(square());

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Justin');

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
};

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();