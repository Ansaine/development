const person1 = {
    name : "Akshay",
    func : function (){
        console.log(this);
    }
}

const person2 = {
    name : "Angshuman",
}


function x(){
    console.log(this);
}

x();
x.call(this);
x.call(this);
x.call(person1);
x.call(person2);
x.call(person2);

