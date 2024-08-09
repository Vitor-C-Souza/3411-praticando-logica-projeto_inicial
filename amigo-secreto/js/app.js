let listaSorteio = document.getElementById("lista-sorteio");
let amigoCampo = document.getElementById("nome-amigo");
let amigos = document.getElementById("lista-amigos");

let listaAmigos = [];

function adicionar() {
  if (amigoCampo.value != "" && !listaAmigos.includes(amigoCampo.value)) {
    let amigo = amigoCampo.value;

    if (amigo.trim() !== "") {
      listaAmigos.push(amigo.trim());

      amigos.textContent = listaAmigos.join(", ");
    }    
  } else {
    alert("Informe o nome do amigo e não pode ser repetido!");
  }
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  if (listaAmigos.length % 2 == 0 && listaAmigos.length != 0) {
    let listaAmigosCopia = [...listaAmigos];
    let sorteados = [];

    while (listaAmigosCopia.length > 0) {
      let indiceAleatorio = Math.floor(Math.random() * listaAmigosCopia.length);
      let amigoSorteado = listaAmigosCopia.splice(indiceAleatorio, 1)[0];

      sorteados.push(amigoSorteado);
    }

    for (let i = 0; i < sorteados.length; i++) {
      let amigo1 = sorteados[i];
      let amigo2 = sorteados[(i + 1) % sorteados.length];

      let parSorteado = document.createElement("p");
      parSorteado.textContent = `${amigo1} → ${amigo2}`;
      parSorteado.className = "sorteio__par";

      listaSorteio.appendChild(parSorteado);
    }
  } else {
    alert("o numero de amigos precisa ser par e maior que zero!");
  }
}

function reiniciar() {
  listaAmigos = [];
  amigos.textContent = "";

  while (listaSorteio.firstChild) {
    listaSorteio.removeChild(listaSorteio.firstChild);
  }
}
