function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let qtd = document.getElementById("qtd").value;

  if (qtd == "") {
    alert("digite a quantidade");
  } else {
    let qtdTipoIngresso = document.getElementById(
      `qtd-${tipoIngresso}`
    ).textContent;

    if (parseInt(qtd) > parseInt(qtdTipoIngresso)) {
      alert(
        "quantidade insuficiente de ingressos disponiveis para essa compra!"
      );
    } else {
      document.getElementById(`qtd-${tipoIngresso}`).textContent =
        parseInt(qtdTipoIngresso) - parseInt(qtd);
    }
  }
}
