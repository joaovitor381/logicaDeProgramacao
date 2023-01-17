let peso = 73.5;
let altura = 1.77;
let imc = peso / altura ** 2;

if (imc < 18.5) {
  alert("Magreza");
} else if (imc < 25) {
  alert("Normal");
} else if (imc < 30) {
  alert("Sobrepeso");
} else if (imc < 40) {
  alert("Obesidade");
} else {
  alert("Obesidade Grave");
}
