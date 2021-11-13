function Converter() {
  var Valor = document.getElementById("valor");
  var ValorKm = Valor.value;
  var ValorKmNumerico = parseFloat(ValorKm);
  var Resposta = document.getElementById("valorConvertido");
  
  var ValorConvertido = ValorKmNumerico * 0.0000000000001057
  var tempo = ValorConvertido * 365.2425
  var textohtml = ValorConvertido + " Anos luz, valor em dias: "+tempo+"dias"
  Resposta.innerHTML =  textohtml
}

function Estrela() {
  var NomeDaEstrela = document.getElementById("estrela");
  var ValorEstrela = NomeDaEstrela.value;
  var Resposta = document.getElementById("valorConvertido")
  
  if (ValorEstrela == "Cent"){
    var ALEstrela =4.24 
    var KMEstrela = ALEstrela * 9460536068.016
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + "e tempo em dias:" +tempo
    Resposta.innerHTML =  textofinal
  }
    
  if (ValorEstrela == "ACentA"){
    var ALEstrela =4.35
    var KMEstrela = ALEstrela * 9460536068.016
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + "e tempo em dias:" +tempo
    Resposta.innerHTML =  textofinal
}
  if (ValorEstrela == "ACentB"){
    var ALEstrela =4.35
    var KMEstrela = ALEstrela * 9460536068.016
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + "e tempo em dias:" +tempo
    Resposta.innerHTML =  textofinal
  }
  if (ValorEstrela == "EBar"){
    var ALEstrela = 5.98
    var KMEstrela = ALEstrela * 9460536068.016
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + "e tempo em dias:" +tempo
    Resposta.innerHTML =  textofinal
  }
  if (ValorEstrela == "Wol"){
    var ALEstrela = 7.78
    var KMEstrela = ALEstrela * 9460536068.016
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + "e tempo em dias:" +tempo
    Resposta.innerHTML =  textofinal
  }
  
  if (ValorEstrela == "Sol"){
    var ALEstrela = 3.26
    var KMEstrela = 150260000
    var tempo = ALEstrela * 365.2425
    var textofinal = "Distancia em KM: "+ KMEstrela + ", ano-luz:" + ALEstrela + " e tempo em dias:" +tempo1
    Resposta.innerHTML =  textofinal
  }

}