const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
    try{
        contaPalavras(texto);
    }  catch(erro){
        //o que fazer com o erro?
    }

    })

function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
} 

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

function tirandoCaracteresEspeciais(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if(palavra.length >=3 ){
            const palavraLimpa = tirandoCaracteresEspeciais(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0 ) + 1
        }
    }); 
    return resultado;
    
}

