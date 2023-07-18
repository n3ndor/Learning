//The process when we create out type by using other types or using data type features to get the goal we want

// type Receipt ={
//   sender: string;
//   amount: number;
// };

// let receipt_1: Receipt = {
//   sender: "tester",
//   amount: 1000
// }

//Mapped types

type Book = {
  title: string;
  options: {
    [key: string]: string;
  }
};
const book_1: Book = {
  title: "Cool book about typescript dev",
  options: {
    genre: "development",
    lang: "en"
  }
}