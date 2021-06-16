var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

/* QUESTION 4 
The this identifier has been used to acess objects that are declared like as a global scope
because it makes it easier to get access to them. 
Another example of how we use the this identifier is in a class eg

class Audrey{
    constructor(){
        this.name=[];
        this.age=[];
    }
}
Here it has been used to set the value of name to an empty array where we can be able to
add more names in the name array

 */

/* QUESTION 3 
What the code will output in the console
for the first console it console the name bar because we specified that from the 
name we want to get the value that has been assigned to it by using the this.name
for self.name console the name bar because it can be able to access the value that has been put

Inner function is an annonymus function

For the inner function for this.name it brings undefined because the name:"bar" is out of 
it's scope it is a global scope it can not access it that is why it brings undefiened

for self.name it consoles the name bar because the variable has been declared and the inner function can
be able to acess it when you call it by self.name
*/

/* Question 2
Callbacks in javascript are used to callback functions 
like they are passed in another function as a parameter 
and has a set timeout where you specify the time you want
your callback to start executing */