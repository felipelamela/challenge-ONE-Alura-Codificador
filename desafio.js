/*Funcão para criar a criptografia do texto inserido*/

function criptografa() {
  const lista = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
  var textoArea = document.getElementById("area_texto").value;
  var resultado = document.querySelector(".resultado");
  var novaPalavra = textoArea;

  resultado.innerText = "";

  for (var n = 0; n < Object.values(lista).length; n++) {
    novaPalavra = novaPalavra.replaceAll(
      Object.keys(lista)[n],
      Object.values(lista)[n]
    );
  }

  resultado.innerText = novaPalavra;
  try {
    modificaBoxResultado();
  } catch (error) {}

  textoArea = document.getElementById("area_texto").value = "";
}

/*Funcão para descriptografar do texto inserido*/
function descriptografa() {
  const lista = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
  var textoArea = document.getElementById("area_texto").value;
  var resultado = document.querySelector(".resultado");
  var novaPalavra = textoArea;

  for (var n = 0; n < Object.values(lista).length; n++) {
    novaPalavra = novaPalavra.replaceAll(
      Object.values(lista)[n],
      Object.keys(lista)[n]
    );
  }
  resultado.innerText = novaPalavra;
  try {
    modificaBoxResultado();
  } catch (error) {}

  textoArea = document.getElementById("area_texto").value = "";
}

/*Funcão para copiar o texto inserido*/
function copiarTexto() {
  var copia = document.getElementById("resultado").innerHTML;
  if (navigator.clipboard.writeText(copia)) {
    document.getElementById("botao-copiar").classList.toggle("verde");
    document.getElementById("botao-copiar").innerHTML = "Copiado";
    setTimeout(function () {
      document.getElementById("botao-copiar").classList.toggle("verde");
      document.getElementById("botao-copiar").innerHTML = "Copiar";
    }, 3000);
  }
}
/*Função que retira a imagem e o texto informativo e adiciona o botão de copia*/
function modificaBoxResultado() {
  var semImagem = document.getElementById("semImagem");
  semImagem.parentNode.removeChild(semImagem);
  document.getElementById("botao-copiar").style.display = "inline";
  document.getElementById("resultado").style.display = "block";
}

const btnCriptgrafa = document.querySelector(".criptografar");
const btnDescriptografa = document.querySelector(".descriptografar");
const btnCopiar = document.querySelector(".botao-copiar");
var areaResultado = document.getElementById("resultado");

btnCriptgrafa.addEventListener("click", criptografa);
btnDescriptografa.addEventListener("click", descriptografa);
btnCopiar.addEventListener("click", copiarTexto);

if (areaResultado.innerHTML === "") {
  document.getElementById("botao-copiar").style.display = "none";
  document.getElementById("resultado").style.display = "none";
}
/* add uma classlist para modificar o local onde esta a imagem, fazendo assim a retirada do botão e addendo o texto de que não possue msg, modificar no css e fazer a responsividade tambem

*/
