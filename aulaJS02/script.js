let peso = Number(prompt("peso(kg):"))
let altura = Number(prompt("altura(m):"))
let imc=peso/(altura**2)
console.log(imc.toFixed(2))
alert(imc.toFixed(2))
if (imc<=18) {
    console.log("Baixo")
} else if(imc>18&&imc<=24) {
    console.log("Normal") 
}else {
   console.log("sobrepeso")
}
// && -> todas as condiçoes devem ser verdadeiras
// || -> se alguma condiçao for certa, vai entra no IF
// ! -> significa NAO. Ele inverte o valor do booleano
console.log(!true)
let idade=15
//Se NAO idade maior ou igual a 18
if(!(idade>=18))
    console.log("menor de idade")

