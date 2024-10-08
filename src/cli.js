import fs from 'fs';
import trataErros from './erros/funcoes-erros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    } catch(erro) {
        trataErros(erro);
    }
});


 function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
   
        fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(()=>{
            console.log('arquivo criado com sucesso');         
        })
        .catch((erro)=>{
            throw erro;
        }).finally(()=> console.log('operacao finalizada')
        );
       
    } 
    

