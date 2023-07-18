// class Product {
//   private name: string;
//   private description: string;

//   constructor(name:string, description:string){
//     this.name = name;
//     this.description = description;
//   }
// }


// interface Product {
//   name: string;
//   description: string;

//   buy(): string;
//   getAllInfo(): string;
// }

// class DigitalProduct implements Product {
//   name: string;
//   description: string;;

//   constructor(name: string, description: string) {
//     this.name = name;
//     this.description = description
//   }
//   buy(): string { return "I'm buying a digital product" }
//   getAllInfo(): string { return `Digital product info: ${this.name} \n ${this.description}` }
// }

// class PhysicalProduct implements Product {
//   name: string;
//   description: string;;

//   constructor(name: string, description: string) {
//     this.name = name;
//     this.description = description
//   }
//   buy(): string { return "I'm buying a physical product" }
//   getAllInfo(): string { return `Physical product info: ${this.name} \n ${this.description}` }
// }