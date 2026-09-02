 let maior = 0
const carrinho=[
    
    
  
   
    {produto:"Xquejo", preco:35.00, quantidade: 30},
   
     {produto:"Xsalada", preco:30.00, quantidade: 20},
  
     {produto:"Xchurrasco", preco:40.00, quantidade: 10},
    
    {produto:"Xratao", preco:33.80, quantidade: 10}



]
    for(const itemDoMercado of carrinho){
        console.log(itemDoMercado.produto)
        console.log(itemDoMercado.preco)
        console.log(itemDoMercado.quantidade)
        console.log(itemDoMercado.preco * itemDoMercado.quantidade)

        let valorAtual=itemDoMercado.preco * itemDoMercado.quantidade

       if(valorAtual>maior){
        maior = valorAtual
        
    }


    }
  console.log(maior)
  