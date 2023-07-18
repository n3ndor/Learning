// function add(x:number | string, y:number | string){
//   return x + y //Operator "+" cannot be applied to types number | string
// }
// function add(x: number | string, y: number | string) {
//   if (typeof x == "string" && typeof y == "string") {
//     return x.toString() + y.toString();
//   } else if (typeof x == "number" && typeof y == "number") {
//     return x + y
//   }
// }
var Frog = /** @class */ (function () {
    function Frog() {
    }
    Frog.prototype.ribbit = function () {
        console.log("Ribbit ribbit...");
    };
    return Frog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("meow meow...");
    };
    return Cat;
}());
function makeSound(animal) {
    if ("ribbit" in animal) {
        animal.ribbit();
    }
    else {
        return animal.meow();
    }
}
