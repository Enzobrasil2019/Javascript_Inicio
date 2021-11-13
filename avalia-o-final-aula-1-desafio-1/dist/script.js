var NotaPrimeiroSemestre = 3.235623
var NotaSegundoSemestre = 9
var NotaTerceiroSemestre = 4.234234234
var NotaQuartoSemestre = 1


var NotaFinal = (NotaPrimeiroSemestre + NotaSegundoSemestre + NotaTerceiroSemestre + NotaQuartoSemestre)/4

var NotaFinalArredondada = NotaFinal.toFixed(2)

if (NotaFinalArredondada>=6) {
   console.log("Parabéns você passou de ano com " + NotaFinalArredondada)
} else {
   console.log("\n Você tirou " + NotaFinalArredondada + ".\n Você terá que repetir de ano \n")
}