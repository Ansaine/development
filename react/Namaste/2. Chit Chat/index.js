const obj =
{
    fn: function () {
        console.log(this);  // gives the current obj object
    },

    fn2: () => {
        console.log(this);  // gives window object. Arrow functions take this of its parent
    }
}

/*
1. This doesn't depend on where it is, depends on how it is called
*/

function x() {
    console.log(this);
    function y() {
        console.log(this);
        function z() {
            console.log(this);
        }
        z();
    }
    y();
}
x();

/*
Ways to call a function. Here, we are binding the parameter when using function.call(). The parameter
becomes the 'this/window' for that function. 
*/

const person1 = {
    name: "Akshay",
}

const person2 = {
    name: "Angshuman",
}


function x() {
    console.log(this);
}

x();
x.call(this);
x.call(person1);
x.call(person2);

/*

There are 3 functions - call, apply and bind. These are siblings of one another. They can change the 'this' 
of the functions

heyThere
*/
