var textInput = document.querySelector("#texto");
var outInput = document.querySelector("#caixa");


function criptografar(){

  var texto = textInput.value;

  var textCriptografado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
  
  document.getElementById('caixa').innerHTML = '<textarea readonly id="texto-output">' + textCriptografado + 
  '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var textDescriptografado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
  
    document.getElementById('caixa').innerHTML = '<textarea readonly id="texto-output">' + textDescriptografado + 
    '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('texto-output');
    textoCop.select();
    document.execCommand('copy');
    Swal.fire(
      'Texto copiado.'
    )
}  