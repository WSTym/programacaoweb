var n1 = prompt("Nota 1")
var n2 = prompt("Nota 2")
var n3 = prompt("Nota 3")
var n4 = prompt("Nota 4")
n1 = parseFloat(n1)
n2 = parseFloat(n2)
n3 = parseFloat(n3)
n4 = parseFloat(n4)
var media = (n1+n2+n3+n4)/4

document.write("Nota 1: "+n1+"<br>")
document.write("Nota 2: "+n2+"<br>")
document.write("Nota 3: "+n3+"<br>")
document.write("Nota 4: "+n4+"<br>")
document.write("Média: "+media+"<br>")

if(media>=65){
	document.write("Aprovado")
}else{
	document.write("Reprovado")
}

