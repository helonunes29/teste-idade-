function verificarFase () {
    var nome = document.getElementById("nome").ariaValueMax;
    var idade = document.getElementById("idade").ariaValueMax;
    var fase;

    if(/\d/ .test (nome)) {
      alert ("Por favor, insira um nome valido sem numeros. ");
      return;

    }
     if (idade <= 11) {
        fase = "Criança";
     } else if (idade <= 20) {
        fase = "Adolescente"
     } else if (idade < 65) {
        fase = "Adulta"
     } else {
        fase = "Idoso"
     }

     document.getElementById("resultado").innerHTML = nome + "você esta na fase da vida: " + fase;
}