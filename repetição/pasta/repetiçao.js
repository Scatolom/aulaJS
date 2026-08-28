//for->loop
//let conta=0-> VARIAVREL DE CONTROLE
//conta<10->ANALIRSE DE CONTROLE
//conta++->O QUE ACONTECE COM A VARIAVEL DE CONTROLE
// for-> quando se sabe o final
//while-> quando nao se sabe o final
/*for(let conta=0; conta<10;conta++){
    console.log(conta)
}console.log("loop terminou")
//TABUADA
const numero=Number(prompt("tabuada de qual numero"))
if(Number.isNaN(numero)){
    console.log("numero invalido")
}else{
    //console.log("Tabuada do " + numero)
    console.log(`\n TABUADA DO NUMERO ${numero} \n`)
    
    for(let i=1; i<=10;i++)
    {
        const resultado=numero*i
        console.log(`${numero}x${i}=${resultado}`)
    }
}
    */
/*//exibe numeros pares de 0 a 20
console.log("numeros pares de 0 a 20")
//pares=pares +2 -igual a-> pares+=2
for(let pares=0;pares<=20;pares+=2){
    console.log(pares)
}
    */
//CONTAGEM REGRESSIVA COM FOR
/*console.log("lacamento em: \n")
for(let conta=10;conta>=1;conta--){
    console.log(conta)
}console.log("Decolar!!!")
*/
/*for(let i=1;i<=3;i++){
let linh =""
    for(let p=1;p<=3;p++)
        linh+= p
        console.log(linh)
}
*/
for(let i=1;i<=10;i++){
    let p=""
    for(let o=1;o<=i;o++)
        p+="*"+""
    console.log(p)
}