let display = document.getElementById("display");
//numbs
let one = document.getElementById("numbOne");
let two = document.getElementById("numbTwo");
let three = document.getElementById("numbThree");
let four = document.getElementById("numbFour");
let five = document.getElementById("numbFive");
let six = document.getElementById("numbSix");
let seven = document.getElementById("numbSeven");
let eight = document.getElementById("numbEight");
let nine = document.getElementById("numbNine");
//operators
let multiply = document.getElementById("numbMultiply");
const plus = document.getElementById("numbPlus");
const dot = document.getElementById("numbDot");
const equal = document.getElementById("numbEqual");
const minus = document.getElementById("numbMinus");
const devide = document.getElementById("numbDevide");
const clear = document.getElementById("numbClear");
////event listeners
one.addEventListener("click", function () {
  display.value += one.value;
});

two.addEventListener("click", function () {
  display.value += two.value;
});
three.addEventListener("click", function () {
  display.value += three.value;
});
four.addEventListener("click", function () {
  display.value += four.value;
});
five.addEventListener("click", function () {
  display.value += five.value;
});
six.addEventListener("click", function () {
  display.value += six.value;
});
seven.addEventListener("click", function () {
  display.value += seven.value;
});
eight.addEventListener("click", function () {
  display.value += eight.value;
});
nine.addEventListener("click", function () {
  display.value += nine.value;
});
//operators
multiply.addEventListener("click", function () {
  display.value += multiply.value;
  multiply.disabled = true;
});

plus.addEventListener("click", function () {
  display.value += plus.value;
  plus.disabled = true;
});
dot.addEventListener("click", function () {
  display.value += dot.value;
});
minus.addEventListener("click", function () {
  display.value += minus.value;
  minus.disabled = true;
});
devide.addEventListener("click", function () {
  display.value += devide.value;
  devide.disabled = true;
});
clear.addEventListener("click", function () {
  display.value = " ";
  devide.disabled = false;
  minus.disabled = false;
  plus.disabled = false;
  multiply.disabled = false;
});

//Equal
equal.addEventListener("click", function (e) {
  e.preventDefault();
  if (display.value.includes("*")) {
    let newArray = display.value.split("*");
    let arrayOne = newArray.splice(1);
    let sumOne = 0;
    for (var i = 0; i < newArray.length; i++) {
      sumOne += newArray[i] * arrayOne[i];
    }
    display.value = sumOne;
  } else if (display.value.includes("+")) {
    let newArray = display.value.split("+");
    let arrayOne = newArray.splice(1);
    newArray = parseFloat(newArray);
    arrayOne = parseFloat(arrayOne);

    let inittial = newArray + arrayOne;
    display.value = inittial;
  } else if (display.value.includes("-")) {
    let newArray = display.value.split("-");
    let arrayOne = newArray.splice(1);
    newArray = parseFloat(newArray);
    arrayOne = parseFloat(arrayOne);

    let inittial = newArray - arrayOne;
    display.value = inittial;
  } else if (display.value.includes("/")) {
    let newArray = display.value.split("/");
    let arrayOne = newArray.splice(1);
    newArray = parseFloat(newArray);
    arrayOne = parseFloat(arrayOne);

    let inittial = newArray / arrayOne;
    display.value = inittial;
  }

  devide.disabled = false;
  minus.disabled = false;
  plus.disabled = false;
  multiply.disabled = false;
});
console.log(display.value);
