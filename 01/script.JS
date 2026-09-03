const temperatura=Number(prompt("temperatura(°C)"))
if(Number.isNaN(temperatura))
    console.log("Temperatura invalida, tente novamente")
if (temperatura<0) {
    console.log("Muito frio")
} else if(temperatura>=0&&temperatura<=15){
    console.log("Frio")
}else if(temperatura>=16&&temperatura<=25)
    console.log("agradavel")
else if(temperatura>=26&&temperatura<35)
    console.log("Quente")
else if(temperatura>=35)
    console.log("Muito quente")