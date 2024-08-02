function criptografaTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografaTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function temCaracterEspecial(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function validaTexto(texto) {
  const minusculas = texto.toLowerCase();
  const semAcento = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    texto === minusculas && texto === semAcento && !temCaracterEspecial(texto)
  );
}

function exibeResultado(texto) {
  const campoVazio = document.querySelector(".sem-retorno");
  const campoPreenchido = document.querySelector(".texto-criptografado");
  const paragrafo = document.querySelector(".texto-criptografado p");

  campoVazio.classList.add("d-none");
  campoPreenchido.classList.remove("d-none");

  if (validaTexto(texto)) {
    paragrafo.textContent = texto;
  } else {
    paragrafo.textContent = "Apenas letras minúsculas e sem acento.";
  }
}

function criptografa() {
  const btnCryptography = document.querySelector("#criptografar");
  btnCryptography.addEventListener("click", function (event) {
    event.preventDefault();
    const campoTexto = document.getElementById("texto-principal").value;
    const textoCriptografado = criptografaTexto(campoTexto);
    exibeResultado(textoCriptografado);
  });
}

function descriptografa() {
  const btnDecryptography = document.querySelector("#descriptografar");
  btnDecryptography.addEventListener("click", function (event) {
    event.preventDefault();
    const campoTexto = document.getElementById("texto-principal").value;
    const textoDescriptografado = descriptografaTexto(campoTexto);
    exibeResultado(textoDescriptografado);
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#copiar").addEventListener("click", copiarTexto);
});

function copiarTexto() {
  let textoCopiado = document.querySelector(".texto-criptografado p");
  navigator.clipboard
    .writeText(textoCopiado.innerText)
    .then(() => {
      alert("Texto copiado");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  criptografa();
  descriptografa();
});
