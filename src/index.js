const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
     verificaPalavrasDuplicadas(texto);
})

console.log(link);

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0 ) + 1
    }); 
    
}