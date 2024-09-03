function trataErros(erros){
      if(erro.code === 'ENOENT'){
        throw new Error('arquivo nao encontrado')
      } else{
        return 'erro na aplicacao'
      }
}

module.exports = trataErros