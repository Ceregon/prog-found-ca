// question 1

var animal = "cat";

// question 2

var person = {
  name: "Marius",
  country: "Norway"
};

// question 3

var outOfStock = false;

if(outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
};

// question 4

var years = [2016, 2017, 2018, 2019, 2020];

for(var i = 0; i < years.length; i++){
  console.log(years[i]);
};

// question 5

for(var count = 15; count <= 25; count++){
  console.log(count);
};

// question 6

for(var count = 15; count <= 25; count++){
  if(count === 20) {
    console.log(count);}
};

// question 7

var movies = [{
  title: "Jurassic Park",
  year: 1993,
  owned: true
},
{
  title: "The Matrix",
  year: 1999,
  owned: false
}];

for(var i = 0; i < movies.length; i++){
  console.log(movies[i].year);
  console.log(movies[i].owned);
};

// question 8

function whatIDontLike(food){
  console.log("I don't like "+ food);
};

whatIDontLike("tomato");

// question 9

function subtract(number1, number2) {
  var sum = number1 - number2;
  console.log(sum);
};

// question 10

var list = [];

function addToList(item) {
  list.push(item);
}

addToList("carrot");
