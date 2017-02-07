var names = ["Gard", "trine", "inge"];
//
// names.forEach(function(name){
//     console.log("foreach", name);
// });
//
// names.forEach((name) => {
//    console.log("arrowfunc", name);
// });
//
// names.forEach((name)=> console.log(name));

// var returnmed = (name) => name + "!";
// console.log(returnmed("Gard"));

// var person = {
//     name: "Gard",
//     greet: function () {
//     names.forEach((name)=> {
//       console.log(this.name + " says hi to " + name);
//     });
//     }
// };
//
// person.greet();


function add (a, b){
    return a+b;
}

var addStatement = (a, b) => {
    return a+ b;
}
console.log((addStatement(4,7)));


var addExpression = (a,b) => a+b;
console.log((addExpression(3,-2)));
//console.log(add(1,3));
//console.log(add(9,0));