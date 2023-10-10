const sampleArray = [1, 2, 3, 4, 5];

const double = (number) => number * 2;

sampleArray.forEach((num) => {
  console.log(double(num));
});

function greet(name) {
  console.log(`Hello,  ${  name  }!`);
}

greet("World");
