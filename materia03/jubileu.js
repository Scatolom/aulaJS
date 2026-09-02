//RELEMBRANDO
   //vetor - guarda  valores
   //posiçoes - (indice)
   //for of - percorrer a lista

   //OBIJETO - SOA COMO FICHA COM INFORMACOES
   // - CADA INFORMCAO TEM UMA CHAVE E UM VALOR
   //PESSOA - (NOME,IDADE,CPF,GENERO)
   const PESSOA = {
     nome:"Davi",
     idade:17,
        email:"email@gmail.com",
     genero:"masculino",
     cpf:"123.456.789.10",
   }
   console.log(PESSOA)//acessar todoo objeto
   console.log(PESSOA.nome)//Davi
   console.log(PESSOA["idade"])//17
   //FOR IN
   for(const chave in PESSOA){
      //chave e o nome da propriedade
   //objeto[chave] é o valor
   console.log(PESSOA[chave])
   //PARA CADA VEZ QUE ELE PERCORRER, ELE VAI PEGAR
   //A CHAVE ATUAL E RETORNAR O VALOR QUE A CHAVE REPRESENTA
   }

   //objeto aluno que guarda os dados
   const aluno = {
      nome:"Ana",
      matricula:"56656516",
      curso:"JS",
      nota:9.5,
   }
   console.log("dados do aluno:\n")
for(const chave in aluno){
   const valor = aluno[chave]
   console.log("chave: " + chave + " valor:" + valor)
}   

// LISTA DE PRODUTOS
const carrinho = ["camiseta", 
      {produto:"camiseta", preco: 49.90, quantidade: 2},
   "calsa", 
   {produto:"calsa", preco: 150.90, quantidade: 1},
   "tenis",
   {produto:"tenis", preco: 199.90, quantidade: 1},]
   for(const itemDoMercado of carrinho){
      console.log(itemDoMercado.produto)
      console.log(itemDoMercado.preco)
   }