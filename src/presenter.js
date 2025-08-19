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
  if (event.submitter.id === "sumar-button") {
    const result = sumar(firstNumber, secondNumber);
    div.textContent = `El resultado de la suma es: ${result}`;
  } else if (event.submitter.id === "multiplicar-button") {
    const result = multiplicar(firstNumber, secondNumber);
    div.textContent = `El resultado de la multiplicación es: ${result}`;
  }
  

});
