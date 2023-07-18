// function add(x: number = 0, y: number = 0, z?: number): number {
//   if (z) {
//     return x + y + z
//   }
//   var result = x + y;
//   return result;
// }
// add(5, 10)


// function saveToJsonName(names:string[]){
//   return JSON.stringify(names);
// }


// function getFullName(user: { name: string, last_name: string }) {
//   return user.name + " " + user.last_name;
// }


// interface UserFullName {
//   readonly name: string;
//   readonly last_name: string;
// }

//   function getFullName(user: UserFullName) {
//   return user.name + " " + user.last_name;
// }


// function add(x: number | string, y: number | string): string | null {
//   return x.toString();
// }
// add(2, "test")



// function addList(numbers: number[]): number {
//   var result: number = 0;
//   numbers.map((num) => {
//     result = result + num;
//   })
//   return result;
// }
// var list = [1, 5, 8, 10];
// console.log(addList(list));



// interface User {
//   name:string;
//   last_name: string;
//   sur_name?: string;
//   age: number | string;
// }

// function userToJson(user: User):string{
//   return JSON.stringify(user)
// }