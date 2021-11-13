//          chave.  valor.
var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 5 + jogador.empates * 2;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i <= jogadores.length; i++) {
    if (i < jogadores.length) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" +
        i +
        ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
      elemento +=
        "<td><button onClick='tirarJogador(" +
        i +
        ")'>Desclassificado</button></td>";
      elemento +=
        "<td><button onClick='vencedorJogador(" +
        i +
        ")'>Vencedor</button></td>";
      elemento += "</tr>";
    } else {
      elemento += "<tr><td><input type='text' id='adicionaNome' /><br></td>";
      elemento += "<td></td>";
      elemento += "<td></td>";
      elemento += "<td></td>";
      elemento += "<td></td>";
      elemento +=
        "<td colspan=4><button onClick='adicionarJogadores()'>Adicionar</button></td>";
    }
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var contagem = 0;
  while (contagem < jogadores.length) {
    if (contagem == i) {
      var jogador = jogadores[contagem];
      jogador.vitorias++;
      jogador.pontos = calculaPontos(jogador);
      contagem = contagem + 1;
    } else {
      var jogador = jogadores[contagem];
      jogador.derrotas++;
      jogador.pontos = calculaPontos(jogador);
      contagem = contagem + 1;
    }
    exibeJogadoresNaTela(jogadores);
  }
}

function adicionarEmpate() {
  var contagem = 0;
  while (contagem < jogadores.length) {
    var jogador = jogadores[contagem];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    contagem = contagem + 1;
  }
  exibeJogadoresNaTela(jogadores);
}

function tirarJogador(i) {
  jogador = jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

function vencedorJogador(i) {
  jogadores = jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogadores() {
  var jogador = jogadores;
  var Novojogador = document.getElementById("adicionaNome").value;
  console.log(Novojogador);
  Novojogador = {
    nome: Novojogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogador = jogador.push(Novojogador);
  exibeJogadoresNaTela(jogadores);
}

function zerarPontuacao(jogadores) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
  }
}