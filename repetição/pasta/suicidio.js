//ADIVINHE O NUMERO
//1 A 10
const numeroSecreto=(Math.floor(Math.random()*100)+1)
let palpite
let tentativa=0
console.log("adivinhe o numero")
do{
   // alert ((Math.floor)(Math.random()*10)+1)
palpite=Number(prompt("seu palpite"))
tentativa++
if(Number.isNaN(palpite))
alert("numero invalido")
else if(palpite==numeroSecreto){
    alert("voce acertou!"+"Em "+tentativa+" tentativas.")
}else if(palpite<numeroSecreto){
    alert("muito baixo")
}else if(palpite>numeroSecreto){
    alert("muito alto")}
}while(palpite!=numeroSecreto)

   