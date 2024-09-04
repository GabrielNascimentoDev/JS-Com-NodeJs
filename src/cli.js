import fs from 'fs'
import trataErros from './erros/funcoes-erros.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        contaPalavras(texto);
    } catch (erro) {
        trataErros(erro);
    }
})

async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = JSON.stringify(listaPalavras)
    try{
       await fs.promises.writeFile(arquivoNovo, textoPalavras)
        console.log('arquivo criado');
        
    } catch(erro){
        throw erro
    }

}