
// Para visualizar os dados inseridos: "console.log(listNew)"
var listNew = []
for (var i = 1; i<=15; i++){
   var sex = prompt("Qual o seu sexo? M ou F");
   var altu = prompt("Qual a sua altura? (Ex: 1.67)");
   var alt = parseFloat(altu)
   var pessoas = [{sexo:sex,altura:alt}];
   listNew.push(pessoas[0])
};

// Para ver o maior valor e o menor : "console.log(max)" e "console.log(min)"
var alts = []
for ( i in listNew){
   var alturas = listNew[i].altura
   alts.push(alturas)
}
var numero=alts[i]
var max = Math.max(...alts);
var min = Math.min(...alts);

// Para vereficar a media da altura dos homens: "console.log(mediaHomensAlt)"
var altHomens = [];
for (i in listNew){
   if(listNew[i].sexo === "M"){
      var altH = listNew[i].altura
      altHomens.push(altH)
   }
}
var somaAltura = 0;
for(var i = 0; i < altHomens.length; i++) {
    somaAltura += altHomens[i];
}
var mediaHomens = somaAltura/altHomens.length

// Para vereficar a quantidade de mulheres: "console.log(quantidadeMulheres)"
var listSexos = [];
for (i in listNew){
   var sexos = listNew[i].sexo;
   listSexos.push(sexos)
}
var quantidadeMulheres = listSexos.filter(x => x === "F" || x === 'f').length;









