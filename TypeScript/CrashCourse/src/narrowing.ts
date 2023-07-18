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


// class Frog {
//   ribbit() {
//     console.log("Ribbit ribbit...");
//   }
// }
// class Cat {
//   meow() {
//     console.log("meow meow...");
//   }
// }
// function makeSound(animal: Frog | Cat) {
//   if ("ribbit" in animal) {
//     animal.ribbit();
//   } else {
//     return animal.meow()
//   }
// }



// type additionFunction = {
//   comment: string;
// };
// function callSomething(fn: additionFunction) {
//   console.log("Comment: ", fn.comment);
// }
// var add_fn: additionFunction = {
//   comment: "We learn TypeScript"
// }
// callSomething(add_fn)


// class AdditionClass {}
// type additionFunction = {
//   new(): AdditionClass;
// }
// function createAddition(addService: additionFunction){
//   return new addService();
// }



//Generic Functions
function lastElement<Type>(arr: Type[]): Type | undefined {
  return arr.slice(-1).pop();
}
const numArr = [1, 5, 9, 20];
