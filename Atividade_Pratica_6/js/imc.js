var nome = prompt("Nome:")
var altura = prompt("Altura(cm):")
var peso = prompt("Peso:")

altura = altura / 100

function imc(p, a){
		var M
		M = peso / (altura * altura)
		return M
}

var res = parseFloat(imc(peso, altura).toFixed(2))
var classificacao

if(res < 16){
	classificacao = 'Baixo peso muito grave'
}else if(res >= 16 && res < 16.99){
	classificacao = 'Baixo peso grave'
}else if(res >= 17 && res < 18.49){
	classificacao = 'Baixo peso'
}else if(res >= 18.50 && res < 24.99){
	classificacao = 'Peso normal'
}else if(res >= 25 && res < 29.99){
	classificacao = 'Sobrepeso'
}else if(res >= 30 && res < 34.99){
	classificacao = 'Obesidade grau I'
}else if(res >= 35 && res < 39.99){
	classificacao = 'Obesidade grau II'
}else{
	classificacao = 'Obesidade grau III'
}

document.write('<h4>'+nome+' possui índice de massa corporal igual a '+res+', sendo classificado como: '+classificacao+'</h4>')