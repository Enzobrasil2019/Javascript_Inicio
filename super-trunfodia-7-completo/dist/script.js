var carta1 = {
  nome: "ayaka",
  atributos: {
    vida: 16000,
    ataque: 1500,
    cura: 0,
    defesa: 59,
    Proficienciaelemental: 80,
    recargaDeEnergia: 190
  }
};

var carta2 = {
  nome: "kokome",
  atributos: {
    vida: 21000,
    cura: 1000,
    ataque: 1600,
    defesa: 50,
    Proficienciaelemental: 60,
    recargaDeEnergia: 180
  }
};

var carta3 = {
  nome: "Chiangling",
  atributos: {
    vida: 21000,
    cura: 0,
    ataque: 1600,
    defesa: 86,
    Proficienciaelemental: 60,
    recargaDeEnergia: 150
  }
};

var carta4 = {
  nome: "Noele",
  atributos: {
    vida: 30000,
    cura: 500,
    ataque: 1000,
    defesa: 100,
    Proficienciaelemental: 40,
    recargaDeEnergia: 100
  }
};

var carta5 = {
  nome: "Sayu",
  atributos: {
    vida: 30000,
    cura: 1300,
    ataque: 950,
    defesa: 49,
    Proficienciaelemental: 45,
    recargaDeEnergia: 150
  }
};

var carta6 = {
  nome: "Baal",
  atributos: {
    vida: 21000,
    cura: 0,
    ataque: 1600,
    defesa: 86,
    Proficienciaelemental: 60,
    recargaDeEnergia: 250
  }
};

var carta7 = {
  nome: "yoimia",
  atributos: {
    vida: 18000,
    cura: 0,
    ataque: 2000,
    defesa: 50,
    Proficienciaelemental: 80,
    recargaDeEnergia: 130
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var elementoResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();
  if (atributoSelecionado != undefined) {
    console.log(atributoSelecionado);
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
  } else {
    elementoResultado.innerHTML = "selecione um atributo";
  }
}