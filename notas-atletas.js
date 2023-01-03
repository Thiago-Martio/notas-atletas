//função principal
function obterResultadosDosAtletas(atletas){ 
    for(let i = 0; i < atletas.length; i++){ //iteração do array de atletas
        let atleta = atletas[i]; //atribui o objeto atual na iteração
        let notasValidas = atleta.notas.sort().slice(1, 4); //atribui à variável um novo array ordenado, sem a maior e menor nota
        
        let soma = notasValidas.reduce(function(total, atual) {//faz a redução do array usando soma
          total += atual;
          return total;
        }, 0);
        
        let mediaDasNotas = soma / notasValidas.length; //calcula a média das notas
        
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${mediaDasNotas}\n`);
    }
}
//dados fornecidos

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
  
   // execução da função
   obterResultadosDosAtletas(atletas);
   