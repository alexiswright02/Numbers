// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  //return the count of numbers in data
  count() {
    return this.data.length;
  }
  //print the numbers in data
  printNumbers() {
    return this.data.forEach((item, index) => {
      console.log("number:", item, "index:", index);
    });
  }
  //return the odd numbers in data
  odds() {
    return this.data.filter((number) => number % 2 !== 0);
  }

  //return the even numbers in data
  evens() {
    return this.data.filter((number) => number % 2 === 0);
  }
  //return the sum of the numbers
  sum() {
    return this.data.reduce((acc, data) => acc + data, 0);
  }
  //return the product of the numbers (multiplication)
  //start at 1 because 0 will result in everything being 0
  product() {
    return this.data.reduce((acc, data) => acc * data, 1);
  }
  //return the numbers greater than the target
  greaterThan(target) {
    return this.data.filter((number) => number > target);
  }
  //return the count of a given number
  howMany(target) {
    return this.data.filter((number) => number === target).length;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
