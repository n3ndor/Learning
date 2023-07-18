// interface Animal {
//   name: string;
//   sound(): string;
//   eat(): string;
//   sleep():string;
// }
// class Frog implements Animal {
//   name: string = "Froggy";
//   sound(): string { return "Ribbit ribbit!" };
//   eat(): string { return "Frog eats worms" };
//   sleep() { return "Sleeping on the water" };
// }


// interface Donation{
//   wallet: string;
//   amount: number;
// }
// let user_donation: Donation = {wallet: "Mr. Tester", amount:100};


// interface Product {
//     getName(): string;
// }
// const product: Product = {
//   getName(){ return "Returns product name"}
// }


// class User {
//   private name: string;
//   public getName(){ return this.name}
// }
// var user: User = new User();
// console.log(user.name); // Property 'name' is private


// class User {
//   protected name: string = "test";
// }
// class Admin extends User {
//   public getName() { return this.name }
// }
// var user: Admin = new Admin();
// console.log(user.getName());
