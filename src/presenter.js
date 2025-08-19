import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const sum = sumar(firstNumber, secondNumber);
  const product = multiplicar(firstNumber, secondNumber);
  div.innerHTML = `La suma es: ${sum} y el producto es: ${product}`;

});
