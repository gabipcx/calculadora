function inicializarCalculadora() {
  console.log("Calculadora com Bootstrap carregada.");
}

function calcularResultado() {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);
  const operacao = document.getElementById("operacao").value;

  let resultado;

  switch (operacao) {
    case "soma":
      resultado = numero1 + numero2;
      break;
    case "subtracao":
      resultado = numero1 - numero2;
      break;
    case "multiplicacao":
      resultado = numero1 * numero2;
      break;
    case "divisao":
      resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero";
      break;
    default:
      resultado = "Operação inválida";
  }

  document.getElementById("resultado").textContent = resultado;
}

